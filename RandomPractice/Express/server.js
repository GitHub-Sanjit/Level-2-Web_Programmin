const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/",logger, (req, res) => {
  console.log("Here");
  res.render("index", { text453445345: "world" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
