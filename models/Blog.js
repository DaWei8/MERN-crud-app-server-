const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model("blogs", Blog);
module.exports = BlogModel;
