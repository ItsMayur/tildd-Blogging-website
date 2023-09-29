import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between itmes-center py-5" id="Navbar">
        <div className="mx-5 ">
          <img src="/img/Logo.png" alt="tildd" srcset="" id="LOGO" />
        </div>
        <div className="flex">
          <ul className="flex space-x-10 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="/learn">Learn</a>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/work-with-us">Work with us</a>
            </li>
          </ul>
        </div>
        <div className="flex mx-5">
          <ul className="flex space-x-5 items-center">
            <li className="featured-btns text-purple">SIGN IN</li>
            <li className="featured-btns text-purple">SIGN UP</li>
          </ul>
        </div>
      </div>
      <div>{/* TO CREATE CATOGORIES */}</div>
    </div>
  );
};
