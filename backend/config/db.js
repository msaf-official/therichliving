const mongoose = require("mongoose");
require('dotenv').config()

exports.connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CREDENTIALS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database connection successful");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
