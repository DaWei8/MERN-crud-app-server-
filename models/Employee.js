const mongoose = require("mongoose");

const Employee = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const EmployeeModel = mongoose.model("employees", Employee);

module.exports = EmployeeModel;
