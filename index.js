const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./models/Employee");
const BlogModel = require("./models/Blog");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("User does not exist");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/getblogs", (req, res) => {
  BlogModel.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.json(err));
});

app.get("/getEmployees", (req, res) => {
  EmployeeModel.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/getblog/:id", (req, res) => {
  BlogModel.findOne(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.post("/createblog", (req, res) => {
  BlogModel.create(req.body)
    .then((blogs) => res.json(blogs))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
