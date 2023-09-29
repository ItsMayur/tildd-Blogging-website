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
                Catagory
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Catagory
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Catagory
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Catagory
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Catagory
              </li>
              <li className="flex optionBtns px-3 py-1 rounded-md text-white bg-purple">
                Catagory
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <BlogMini />
          <BlogMini />
          <BlogMini />
          <BlogMini />
          <BlogMini />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
