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
        <title>
          Space and time complexity in Data Structures Algorithm -The Big-O
          notation
        </title>
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
                      Space and time complexity in Data Structures Algorithm
                      -The Big-O notation
                    </h1>
                    <p className="text-sm font-bold text-purple">
                      Oct 07 ,2023
                    </p>
                  </header>
                  <main>
                    <>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Introduction">
                          Introduction
                        </h2>
                        <p>
                          An{" "}
                          <Link href="https://en.wikipedia.org/wiki/Algorithm">
                            algorithm
                          </Link>{" "}
                          is considered efficient if it uses minimal space and
                          completes the required work in the shortest possible
                          time. Just like in choosing a car that consumes less
                          fuel for cost and efficiency reasons, in computing, we
                          aim to select{" "}
                          <Link href="https://en.wikipedia.org/wiki/Algorithm">
                            algorithms
                          </Link>{" "}
                          that perform the designated tasks with good time and
                          space complexity.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2
                          className="text-4xl text-purple"
                          id="Asymptotic-Notations"
                        >
                          Asymptotic Notations
                        </h2>
                        <p>
                          Asymptotic notations are mathematical representations
                          of algorithms that provide a broad idea of an
                          algorithm&apos;s efficiency. There are three primary
                          notations to learn about:{" "}
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <strong id="Big-O-notation">
                              Big-O notation:
                            </strong>{" "}
                            Big-O notation gives the upper bound of an
                            algorithm, i.e., the maximum amount of time an
                            algorithm will run in its worst case.
                          </li>
                          <li>
                            {" "}
                            <strong id="Omega-notation">
                              Omega notation:
                            </strong>{" "}
                            Omega notation indicates the minimum time an
                            algorithm will take to produce the desired output in
                            its best case.
                          </li>
                          <li>
                            {" "}
                            <strong id="Theta-notation">
                              Theta notation:
                            </strong>{" "}
                            Theta notation represents the average time
                            complexity of the algorithm, considering both the
                            upper and lower bounds.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 pb-3">
                        <h2 className="text-2xl ">Example :</h2>
                        <p>
                          Let&apos;s consider an example where five people are
                          assigned random numbers from one to five, and another
                          person &quot;P&quot; standing far away must choose a
                          number from one to five without knowing which number
                          each person has. The numbers will be checked from left
                          to right.
                        </p>
                        <Image
                          src="/img/blogs/Big-O-eg.png"
                          alt="Bio O example"
                          width="550"
                          height="200"
                        />
                        <p>
                          <strong>Big-O notation:</strong> O(n), where
                          &quot;n&quot; is the number of persons (in this case,
                          5).
                        </p>
                        <p>
                          <strong>Omega notation:</strong> Omega(1), since
                          &quot;P&quot; can say 4, which takes the least time to
                          check.
                        </p>
                        <p>
                          <strong>Theta notation:</strong> The average time
                          complexity could range from 1 to &quot;n.&quot; One
                          thing to keep in mind that the time and space
                          complexity we see are system independent i.e it
                          doesn&apos;t vary if with change the device or{" "}
                          <Link href="https://en.wikipedia.org/wiki/Server_(computing)">
                            server
                          </Link>
                          we are working on.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Standard">
                          Standard - The Big-O notation :
                        </h2>
                        <p>
                          In the field of programming, Big-O notation is
                          primarily used to assess algorithm efficiency. Time
                          complexity typically follows this order:
                        </p>
                        <p className="text-xl pl-5">
                          O(1) &lt; O(log n) &lt; O(n) &lt; O(n{" "}
                          <sup> log n</sup>) &lt; O(n<sup>2</sup>) &lt; O(2
                          <sup>n</sup>) &lt; O(n!)
                        </p>
                        <p>
                          Where &quot;n&quot; represents the number of
                          iterations performed by the code in the worst case
                          scenario. Let us dive deep and see the time
                          complexities of different algorithms.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2
                          className="text-4xl text-purple"
                          id="Space-Complexity"
                        >
                          Space Complexity :
                        </h2>
                        <p>
                          Auxiliary space refers to the additional space a
                          program uses during its execution. It is denoted by
                          Big-O(O(n)), where &quot;n&quot; is the size used by
                          the program. Similar to time complexity, space
                          complexity follows the same trend.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2
                          className="text-4xl text-purple"
                          id="Time-Complexity-Examples"
                        >
                          Time Complexity Examples:
                        </h2>
                        <Image
                          src="/img/blogs/Bio-O.png"
                          alt="Big-O examples"
                          srcset=""
                          id="AboutLogo"
                          className=""
                          width="400"
                          height="500"
                        />
                        <p>
                          In case 1, the loop will run &quot;n&quot; times,
                          resulting in a time complexity of O(n), which is
                          linear time complexity.
                        </p>

                        <p>
                          In case 2, the outer loop runs &quot;N&quot; times,
                          and in each run, the inner loop runs &quot;n&quot;
                          times. This makes the time complexity O(n*N), which is
                          quadratic time complexity.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Conclusion">
                          Conclusion :
                        </h2>
                        <p>
                          There are numerous ways to accomplish a specific task,
                          but finding the best one is the key. As a programmer,
                          you should pay attention to these details as they can
                          significantly impact your code in the long run. If you
                          want to learn more about this topic, you should
                          definitely check this out :
                        </p>
                        <p>
                          <a
                            href="https://youtu.be/D6xkbGLQesk?si=inbYs96d7jQDeMZ3"
                            className="bg-purple text-white p-2 rounded-xl"
                          >
                            Time complexity by CS Dojo
                          </a>
                        </p>
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
                      <a href="#Asymptotic-Notations">Asymptotic Notations</a>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#Big-O-notation">Big-O notation</a>
                        </li>
                        <li>
                          <a href="#Omega-notation">Omega notation</a>
                        </li>
                        <li>
                          <a href="#Theta-notation">Theta notation</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Standard">Standard - The Big-O notation </a>
                    </li>
                    <li>
                      <a href="#Space-Complexity">Space Complexity</a>
                    </li>
                    <li>
                      <a href="#Time-Complexity-Examples">
                        Time Complexity Examples
                      </a>
                    </li>
                    <li>
                      <a href="#Conclusion">Conclusion</a>
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
