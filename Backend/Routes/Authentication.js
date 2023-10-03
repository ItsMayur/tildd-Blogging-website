const express = require("express");
const User = require("./../Models/User");
var session = require("express-session");
const nodemailer = require("nodemailer");
const { getLogger } = require("nodemailer/lib/shared");
var router = express.Router();

function randomIntFromInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tilddforme@gmail.com",
    pass: "ixby wlxu ecaq njts",
    // To be added to env file
  },
});

//Create a user
router.post("/user", function (req, res) {
  //Create User Object
  console.log(req.body);
  const user = new User({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    verificationCode: randomIntFromInterval(1000, 9999),
    password: req.body.password,
  });
  //Save in DB
  user
    .save(user)
    .then((data) => {
      const user_id = data.id;
      // req.session.id = user_id;

      const mailOptions = {
        from: "tilddforme@gmail.com",
        to: data.email,
        subject: "OTP FOR TILDD",
        text: data.verificationCode,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
        }
      });
      res.status(200).send({ message: "SUCCESS" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Error creating user ${err.message}` });
    });
});

//Find a user
router.post("/userLogin", function (req, res) {
  User.find({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userid,
        });
      }
      if (req.body.password == user[0].password) {
        res.send({ message: "SUCCESS" }).status(200);
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
router.delete("/user/:id", function (req, res) {
  User.findOneAndDelete({ userid: req.params.id })
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
        message: "Could not delete user with id " + req.params.userid,
      });
    });
});

module.exports = router;
