import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Script from "next/script";
import Link from "next/link";
import { BlogMini } from "@/components/BlogMini";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  // <---CONSTANTS USED IN PAGE--->
  const [blogs, setBlogs] = useState([""]);

  // <---SEARCH SUBMIT BUTTON--->
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/blogSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BACKEND_URL,
      },
      body: JSON.stringify({
        search: search,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0] == undefined || result[0].title === undefined) {
          document.getElementById("BlogResults").style.display = "none";
        } else {
          setBlogs(result);
        }
      });
    document.getElementById("BlogResults").style.display = "BLOCK";
  };
  return (
    <>
      <Head>
        <title>tildd-Enabling Dreams, Fueling Ambitions</title>
      </Head>
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
        <div className="h-screen w-screen bg-purple flex items-center  justify-center max-md:flex-col-reverse max-md:h-auto max-md:py-10">
          <div
            id="LeftHome"
            className="space-y-12 text-white w-2/6 max-md:w-5/6 max-md:p-5"
          >
            <div className="flex space-x-2">
              <div className="w-0.5 h-6 bg-black"></div>
              <div>
                <h1>
                  <Link href="/">tildd</Link>
                </h1>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-5xl max-sm:text-3xl ">
                Enabling dreams,fueling ambitions
              </h2>
              <h3 className="text-2xl max-sm:text-lg">
                We have something for you..
              </h3>
            </div>
            <div>
              <Link href="/about" className="bg-black rounded-full px-8 py-3">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div id="RightHome">
            <div className="bg-black">
              <Image
                src="/img/about-img.png"
                alt="tildd"
                srcset=""
                id="AboutLogo"
                className=""
                width="310"
                height="310"
              />
            </div>
          </div>
        </div>
        <div className="py-20">
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
                name="search"
                className="h-10 w-96 max-md:w-60 my-10 border-2 border-purple rounded-xl focus:border-purple focus:outline-none text-center"
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
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
