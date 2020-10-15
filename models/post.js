const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { 
    type: String
  },
  author: {
    type: String
  },
  post: { 
    type: String,
    required: true
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
