// <---IMPORTING REQUIRED DEPENDENCIES--->
const express = require("express");
const User = require("./../Models/User");
var session = require("express-session");
const nodemailer = require("nodemailer");
const { getLogger } = require("nodemailer/lib/shared");
var router = express.Router();

// // <---FUNCTION TO CREATE RANDOM OTP--->
function randomIntFromInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// <---NODE MAILER CONFIGURATION--->
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tilddforme@gmail.com",
    pass: "ixby wlxu ecaq njts",
    // To be added to env file
  },
});

// <---ROUTE TO CREATE NEW USER IN DATABASE--->
router.post("/user", function (req, res) {
  // // <---CREATING A USER--->
  const user = new User({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    verificationCode: randomIntFromInterval(1000, 9999),
    password: req.body.password,
  });
  // <---USER SAVED IN DATABASE--->
  user
    .save(user)
    .then((data) => {
      const user_id = data.id;
      // req.session.id = user_id;
      // <---MAIL CONFIGURATION THAT TO BE SEND--->
      const mailOptions = {
        from: "tilddforme@gmail.com",
        to: data.email,
        subject: "OTP FOR TILDD",
        text: data.verificationCode,
      };
      // // <---SENDING MAIL TO THE USER WITH OTP--->
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
        }
      });
      res.status(200).send({ message: "SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: `Error creating user ${err.message}` });
    });
});

// <---ROUTE FOR LOGIN THE USER--->
router.post("/userLogin", function (req, res) {
  User.find({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with email " + req.body.email,
        });
      }
      if (
        req.body.password == user[0].password &&
        user[0].verificationCode == "VERIFIED"
      ) {
        res.send({ message: "SUCCESS" }).status(200);
      } else if (
        req.body.password == user[0].password &&
        user[0].verificationCode != "VERIFIED"
      ) {
        res.send({ message: "NOT VERIFIED" }).status(200);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving user : ${err.message}`,
      });
    });
});

// <---ROUTE TO VERIFY THE OTP OF THE USER--->
router.post("/otpLogin", function (req, res) {
  User.find({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with email " + req.body.email,
        });
      }
      // <---MARKING USER VERIFIED--->
      if (req.body.verificationCode == user[0].verificationCode) {
        User.findOneAndUpdate(
          { email: req.body.email },
          {
            verificationCode: "VERIFIED",
          },
          { new: true }
        ).then(res.send({ message: "SUCCESS" }).status(200));
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving user : ${err.message}`,
      });
    });
});

//Update a user
router.put("/user", function (req, res) {
  // Find note and update it with the request body

  User.findOneAndUpdate(
    { userid: req.body.userid },
    {
      userid: req.body.userid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating user: ${err.message} `,
      });
    });
});

//Delete a user
router.delete("/user", function (req, res) {
  User.findOneAndDelete({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found ",
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete user with email " + req.body.email,
      });
    });
});

module.exports = router;
