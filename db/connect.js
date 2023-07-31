const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

module.exports = connectDB;
