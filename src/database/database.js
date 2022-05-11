const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb connected!'))
    .catch((err) =>
      console.log(`Error trying to connect mongodb, error ${err}`),
    );
};

module.exports = connectToDatabase;
