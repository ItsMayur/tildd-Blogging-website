import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Script from "next/script";
import Link from "next/link";
import { BlogMini } from "@/components/BlogMini";

export default function Home() {
  const [blogs, setBlogs] = useState([""]);
  const searchPost = (e) => {};

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = e.target.value;
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/blogSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: search,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(blogs);
        setBlogs(result);
      });
    document.getElementById("BlogResults").style.display = "BLOCK";
  };
  return (
    <>
      <Script src="https://apis.google.com/js/platform.js" async defer></Script>
      {/* GTAGS FOR GOOGLE ANALITICS */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PXP5FGPPF6" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-PXP5FGPPF6');
        `}
      </Script>

      {/* CODE STARTED FOR WEBSTITE */}
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className="text-5xl text-center ">
          <h2>Search for something new...</h2>
        </div>
        <div className="flex h-auto md:w-11/12">
          <form
            onSubmit={handleSearchSubmit}
            className="w-screen flex flex-col items-center  "
          >
            <input
              type="search"
              placeholder="What is tildd.."
              name="blogSearch"
              className="h-10 w-96 my-10 border-2 border-purple rounded-xl focus:border-purple focus:outline-none text-center"
              aria-label="Search"
              onSubmit={handleSearchSubmit}
            />

            <div
              id="BlogResults"
              className="hidden flex items-center md:w-screen items-center justify-center"
            >
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
          </form>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
