const mongoose = require('mongoose');

const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGODB_URI
} = process.env;

const url = MONGODB_URI || `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  mongoose.connect(url, options)
  .then( function() {
    console.log('MongoDB is connected');
  })
    .catch( function(err) {
        console.log(err);
  });