import express, { NextFunction, Request, Response } from "express";
const app = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

// Router
const router = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", router);
app.use("/api/v1/courses", courseRouter);

router.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.send({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.send({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello World developer!!!!!!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "successfully received data" });
});

export default app;
