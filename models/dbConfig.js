const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/fromscratch',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log('Mongodb connected');
    else console.log('connection error:' + err);
  }
);
