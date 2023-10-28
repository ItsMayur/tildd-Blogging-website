import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { BlogMini } from "@/components/BlogMini";

export default function page() {
  return (
    <div>
      <Head>
        <title>Array data structure – The continouse memory blocks</title>
        <meta
          name="description"
          content="An algorithm is considered efficient if it uses minimal space and completes the required work in the shortest possible time. Just like in choosing a car that consumes less fuel for cost and efficiency reasons, in computing, we aim to select algorithms that perform the designated tasks with good time and space complexity."
        />
        <meta
          name="keywords"
          content="big o notation in data structure,what is big o notation in data structure,big o notation examples,big o notation,what is big o notation,time complexity,space complexity,	time and space complexity,what best describes the space complexity of a program,time complexity and space complexity,what is space complexity"
        />
      </Head>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="flex justify-evenly my-16 max-md:flex-col-reverse max-md:items-center">
            <div id="BlogPage" className="w-3/6 max-md:w-screen max-md:px-5">
              <div id="BlogBody">
                <article id="BlogContent ">
                  <header id="BlogTitle">
                    <h1 className="text-5xl max-sm:text-4xl">
                      Array data structure – The continouse memory blocks
                    </h1>
                    <p className="text-sm font-bold text-purple">
                      Oct 26 ,2023
                    </p>
                  </header>
                  <main>
                    <>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Introduction">
                          Introduction
                        </h2>
                        <p>
                          There are serval ways to store data in the memory.
                          According to the needs of the user and the efficiency
                          of the data structured to perform the required task
                          the data structure is selected. Data structures
                          consist of my items i.e Array ,queue, Stack ,Linked
                          lists etc.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2
                          className="text-4xl text-purple"
                          id="Asymptotic-Notations"
                        >
                          Array :
                        </h2>
                        <ul>
                          <li>
                            {" "}
                            <strong id="Big-O-notation">
                              Definition :
                            </strong>{" "}
                            Array is a type of data structure that stores the
                            data in the memory in a contagious manner.
                          </li>
                          <li>
                            {" "}
                            <strong id="Omega-notation">Example :</strong> Let
                            us take an example of a Ladder where we can define
                            the nth step of the ladder from the initial one that
                            is the first index. Similarly in programming we
                            start the indexing from the zero and can determine
                            the next index by the previous one.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 pb-3">
                        <Image
                          src="/img/blogs/Array-eg.png"
                          alt="Bio O example"
                          width="550"
                          height="200"
                        />
                        <p>
                          An array needs three properties to be initialized the
                          one is the name of array ,data type that we have to
                          add in array and the last one is the size of array.
                          According to the needs of user he can either define
                          the items stored in array at the time of
                          initialization or can store in at the runtime
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Conclusion">
                          Problems to practice :
                        </h2>
                        <div className="text-purple">
                          <p>
                            <Link href="https://leetcode.com/problems/running-sum-of-1d-array/">
                              1) Running sum of array
                            </Link>
                          </p>
                          <p>
                            <Link href="https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/">
                              2) Count sum of pair
                            </Link>
                          </p>
                        </div>
                      </div>
                    </>
                  </main>
                </article>
                <div
                  id="BlogAuthor"
                  className="flex justify-between items-center font-bold text-purple my-2"
                >
                  <p className="featured-btns">Author : Mayur sehgal</p>
                  <div id="BlogShare ">
                    <Link
                      href="/blogs/Next.js-vs-react.js"
                      className="mr-10 featured-btns"
                    >
                      Share
                    </Link>
                  </div>
                </div>
                <div id="SimilarReads" className="py-5">
                  <div>
                    <h2 className="text-2xl">Similar Reads</h2>
                    <div className="text-purple">
                      <p>
                        <Link href="http://localhost:3000/blogs/Space-and-time-complexity-in-Data-Structures">
                          Space and time complexity in Data Structures
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="TableOfContent" className="w-2/6 max-md:w-11/12">
              <div className=" px-10 py-10 rounded-2xl border-purple border-2 space-y-2 text-purple">
                <div>
                  <h2 className="text-2xl ">Table of content</h2>
                </div>
                <div className="">
                  <ol className="list-decimal pl-6">
                    <li>
                      <a href="#Introduction">Introduction</a>
                    </li>

                    <li>
                      <a href="#Asymptotic-Notations">Array</a>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#Big-O-notation">Definition</a>
                        </li>
                        <li>
                          <a href="#Omega-notation">Example</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#Conclusion">Problems to practice</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}
