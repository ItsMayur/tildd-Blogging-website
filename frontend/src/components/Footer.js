import React from "react";

export const Footer = () => {
  return (
    <div
      className="flex h-96 items-center justify-center space-x-16 bg-purple"
      id="Footer"
    >
      <div>
        <div className="space-y-1 mx-1">
          <div>
            <img src="/img/LogoFooter.jpg" id="LOGOF" alt="" />
          </div>
          <div>
            <p>Copyright © 2023 tildd.com</p>
          </div>
        </div>
      </div>
      <div className="h-line-footer"></div>
      <div>
        <ul className="space-y-3">
          <li>
            <a href="">tildd</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="space-y-3">
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-3">
          <li>
            <a href="">tildd</a>
          </li>
          <li>
            <a href="">tildd</a>
          </li>
          <li>
            <a href="">tildd</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="space-y-3">
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
