"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const port = 3000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// Router
const router = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", router);
app.use("/api/v1/courses", courseRouter);
router.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.send({
        success: true,
        message: "Course is created successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello World developer!!!!!!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({ message: "successfully received data" });
});
exports.default = app;
