import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div
        className="flex h-96 items-center justify-center space-x-16 bg-purple max-sm:h-12"
        id="Footer"
      >
        <div className="">
          <div className="space-y-1 mx-1 max-sm:flex items-center">
            <div>
              <img
                src="/img/LogoFooter.jpg"
                id="LOGOF"
                alt=""
                className="max-sm:hidden"
              />
            </div>
            <div>
              <p>Copyright © 2023 tildd</p>
            </div>
          </div>
        </div>
        <div className="h-line-footer max-sm:hidden"></div>
        <div className="max-sm:hidden">
          <ul className="space-y-3">
            <li>
              <Link href="/">tildd</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="max-sm:hidden">
          {" "}
          <ul className="space-y-3">
            {/* <li>
            <a href="/help">Help</a>
          </li> */}
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
