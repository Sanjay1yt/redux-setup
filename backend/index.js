const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const userRouter = require("./users/user.router");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Db connected successfully"))
  .catch((error) => console.log(`error in connecting a DBn ${error}`));

app.use(express.json); //  middleware to parse the json

app.get("/", (req, res) => {
  res.send("home router");
});

// router.use("/user", userRouter);

app.listen(8000, () => {
  console.log("app is listing on port 8000");
});
