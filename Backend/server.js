// <---IMPORTING REQUIRED DEPENDENCIES--->
const express = require("express");
const mongoose = require("mongoose");
const Authentication = require("./Routes/Authentication");
const Blogs = require("./Routes/Blogs");
var session = require("express-session");
const cors = require("cors");

// <---CONSTANTS USED IN SERVER--->
const PORT = 5000;

// <---STARTING EXPRESS--->
const app = express();

// <---CORS SETTINGS FOR THE SERVER--->
app.use(
  cors({
    origin: ["http://localhost:3000", "http://www.tildd.me", "http://tildd.me"],
  })
);

// <---EXPRESS SESSIONS SETTINGS--->
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// <---OTHER SETTINGS--->
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// <---CONNECTING TO MONGODB DATABASE USING MONGOOSE--->
mongoose.Promise = global.Promise;
mongoose
  // .connect("mongodb+srv://tildd:tilddforme@tildd.l38tszj.mongodb.net/", {
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

// <---USING ROUTER THAT WERE CREATED FOR EASY TO UNDERSTAND--->
app.use(Authentication);
app.use(Blogs);

// <---LISTENING TO PORT--->
app.listen(PORT, () => {
  console.log("Port Running from " + PORT);
});
