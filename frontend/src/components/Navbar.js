import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const toggleHamburger = () => {
    if (document.getElementById("NavbarM").style.display == "flex") {
      document.getElementById("NavbarM").style.display = "none";
    } else {
      document.getElementById("NavbarM").style.display = "flex";
    }
  };
  return (
    <div>
      <div className="flex justify-between itmes-center py-5" id="Navbar">
        <div className="mx-5 ">
          <img src="/img/Logo.png" alt="tildd" srcset="" id="LOGO" />
        </div>
        <div className="flex">
          <ul className="flex space-x-10 items-center max-md:hidden ">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <a href="/learn">Learn</a>
            </li> */}
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* <li>
              <a href="/work-with-us">Work with us</a>
            </li> */}
          </ul>
        </div>

        <div className="flex mx-5 items-center justify-center">
          {/* <ul className="flex space-x-5 items-center">
            <li className="featured-btns text-purple">SIGN IN</li>
            <li className="featured-btns text-purple">SIGN UP</li>
          </ul> */}
          <ul
            className="space-y-1 hidden max-md:block"
            onClick={toggleHamburger}
          >
            <li className="w-4 h-0.5 bg-black"></li>
            <li className="w-4 h-0.5 bg-black"></li>
            <li className="w-4 h-0.5 bg-black"></li>
          </ul>
        </div>
      </div>
      <div>
        <ul
          className="hidden flex-col justify-center items-center  space-y-0.5 "
          id="NavbarM"
        >
          <li className="h-12  flex justify-center items-center bg-purple w-full">
            <Link
              className="w-full h-full flex justify-center items-center"
              href="/"
            >
              Home
            </Link>
          </li>
          {/* <li>
              <a href="/learn">Learn</a>
            </li> */}
          <li className="h-12  flex justify-center items-center bg-purple w-full">
            <Link
              className="w-full h-full flex justify-center items-center"
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="h-12  flex justify-center items-center bg-purple w-full">
            <Link
              className="w-full h-full flex justify-center items-center"
              href="/about"
            >
              About
            </Link>
          </li>
          {/* <li>
              <a href="/work-with-us">Work with us</a>
            </li> */}
        </ul>
      </div>
      <div>{/* TO CREATE CATOGORIES */}</div>
    </div>
  );
};
