const express = require("express");
const Post = require("./../Models/Post");
var router = express.Router();

//Create a user
router.post("/createPost", function (req, res) {
  //Create User Object
  const post = new Post({
    title: req.body.title,
    discription: req.body.discription,
    keywords: req.body.keywords,
    link: req.body.link,
  });
  //Save in DB
  post
    .save(post)
    .then((data) => {
      console.log(data);
      res.status(200).send({ message: "SUCCESS" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Error creating user ${err.message}` });
    });
});

router.post("/blogSearch", async (req, res) => {
  const search = req.body.search;
  if (search === "") {
    res.status(200).json([{}]);
  } else {
    const Blog = await Post.find({ title: new RegExp(String(search), "i") });
    if (!Blog) {
      return res.status(400).json({ error: "enter proper search" });
    }

    res.status(200).json(Blog);
  }
});
router.post("/allBlogs", async (req, res) => {
  const Blog = await Post.find({});
  if (!Blog) {
    return res.status(400).json({ error: "enter proper search" });
  }

  res.status(200).json(Blog);
});

module.exports = router;
