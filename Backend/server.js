//import express and mongoose
const express = require("express");
const mongoose = require("mongoose");
const Authentication = require("./Routes/Authentication");
const PORT = 5000;

//create the express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/tildd", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.log("Could not connect to the database.", error);
    process.exit();
  });

//use the API controller
app.use(Authentication);
app.listen(PORT, () => {
  console.log("Port Running from " + PORT);
});
