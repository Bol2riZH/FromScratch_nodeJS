const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

// get post
router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error to get data: ' + err);
    console.log(docs);
  });
});

// send post
router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data:' + err);
  });
});



module.exports = router;
 