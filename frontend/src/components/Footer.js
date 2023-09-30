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
            <p>Copyright © 2023 tildd</p>
          </div>
        </div>
      </div>
      <div className="h-line-footer"></div>
      <div>
        <ul className="space-y-3">
          <li>
            <a href="/">tildd</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="space-y-3">
          {/* <li>
            <a href="/help">Help</a>
          </li> */}
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/cookie-policy">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
