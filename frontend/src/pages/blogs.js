import React from "react";
import { Navbar } from "../components/Navbar";
import { BlogMini } from "../components/BlogMini";
import { Footer } from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="space-y-4 my-2">
          <div className=" flex justify-center">
            <h1 className="text-2xl font-bold w-4/6">Blogs</h1>
          </div>
          <div className="flex justify-center">
            <ul className="flex  space-x-5 w-4/6 flex-wrap">
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Programming
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Developer Updates
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <BlogMini
            title="Why choose Next.js over React.js? Elevate your web development with blazing-fast performance and SEO-friendly features!"
            discription="Next.js is a popular open-source JavaScript framework built on top of React.js. It's designed to simplify the development of server-rendered React applications and provides a set of tools ..."
            tags={["Next JS", "React JS"]}
            url="/blogs/Next.js-vs-react.js"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
