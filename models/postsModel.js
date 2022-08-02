const mongoose = require('mongoose');

const PostsModel = mongoose.model(
  'fromscratch',
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  'post'
);

module.exports = { PostsModel };
