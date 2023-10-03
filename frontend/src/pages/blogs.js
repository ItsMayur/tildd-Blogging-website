import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { BlogMini } from "../components/BlogMini";
import { Footer } from "../components/Footer";

const Page = () => {
  const [blogs, setBlogs] = useState([""]);
  const searchPost = (e) => {};

  fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/allBlogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: "",
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(blogs);
      setBlogs(result);
    });

  return (
    <div>
      <Navbar />
      <main>
        <div className="space-y-4 my-2">
          <div className=" flex justify-center">
            <h1 className="text-5xl font-bold w-5/6 max-md:w-screen text-center">
              Blogs
            </h1>
          </div>
          <div className="flex justify-center">
            <ul className="flex space-x-2 text-sm max-md:flex max-md:overflow-x-auto w-5/6 flex-wrap max-md:overflow-auto max-md:w-screen max-md:ml-2">
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Programming
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Developer Updates
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Developer Updates
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {blogs.map((blog, key) => {
            return (
              <BlogMini
                key={key}
                title={blog.title}
                discription={blog.discription}
                tags={blog.keywords}
                url={String(blog.link)}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
