// <---IMPORTING REQUIRED DEPENDENCIES--->
const express = require("express");
const Post = require("./../Models/Post");
var router = express.Router();

// <---ROUTE FOR CREATING POST DATA IN MONGODB DATABASE--->
router.post("/createPost", function (req, res) {
  // <---CREATING A POST--->
  const post = new Post({
    title: req.body.title,
    discription: req.body.discription,
    keywords: req.body.keywords,
    link: req.body.link,
  });
  // <---SAVING IN DATABASE--->
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

// <---ROUTE FOR SEARCH FOR BLOG--->
router.post("/blogSearch", async (req, res) => {
  const search = req.body.search;
  if (search === "") {
    res.status(200).json([{}]);
  } else {
    // // <---SEARCHING FOR THE BLOG--->
    const Blog = await Post.find({ title: new RegExp(String(search), "i") });
    if (!Blog) {
      return res.status(400).json({ error: "enter proper search" });
    }
    res.status(200).json(Blog);
  }
});

// <---ROUTE FOR GETTING ALL POSTS--->
router.post("/allBlogs", async (req, res) => {
  const Blog = await Post.find({});
  if (!Blog) {
    return res.status(400).json({ error: "enter proper search" });
  }
  res.status(200).json(Blog);
});

module.exports = router;
