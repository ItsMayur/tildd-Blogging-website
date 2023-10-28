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
        <title>Binary search - Divide And Conqure</title>
        <meta
          name="description"
          content="Discover the magic of Binary Search - Divide and Conquer with Mayur Sehgal, your playful guide to coding adventures. Learn the lightning-fast technique that turns searching into a thrilling quest. Join Mayur at 'tildd' and unlock the secrets of efficient programming!"
        />
        <meta
          name="keywords"
          content="binary search c++,binary search time complexity,time complexity of binary search,binary search algorithm,Binary Search,Divide and Conquer,Coding Adventure,Programming,Algorithm,Sorted List,Efficiency,Python,Game Development,Web Development,Mayur Sehgal,Search Algorithm,Computer Science,Code Optimization"
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
                      Binary search - Divide And Conqure
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
                          Hey there, fellow adventurers of the digital realm!
                          Mayur Sehgal at your service, and today, we&apos;re
                          going to dive into a thrilling topic that&apos;s an
                          essential tool in your coding arsenal: Binary Search.
                          Strap on your coding capes, because we&apos;re about
                          to embark on a journey into the heart of &quot;Binary
                          Search - Divide and Conquer.&quot; So, why Binary
                          Search? Imagine you&apos;re exploring a vast dungeon
                          in your favorite RPG game, searching for a legendary
                          treasure chest. You&apos;re faced with a long corridor
                          lined with identical doors. How do you find the chest
                          without wasting time checking every door? You need a
                          strategy, and that&apos;s precisely what Binary Search
                          provides in the world of programming!
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="WIBS">
                          What Is Binary Search?
                        </h2>
                        <p>
                          Binary Search is a lightning-fast way to find an
                          element in a sorted list or array. It follows a simple
                          divide-and-conquer approach that can dramatically
                          reduce your search time. Here&apos;s how it works:
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <strong id="SITM">Start in the middle :</strong> You
                            look at the item in the middle of your sorted list.
                            In our dungeon analogy, this would be like checking
                            the door in the middle of the corridor.
                          </li>
                          <li>
                            {" "}
                            <strong id="COMP">Compare :</strong> Is the item
                            you&apos;re looking for smaller or larger than the
                            one in the middle?
                          </li>
                          <li>
                            {" "}
                            <strong id="DAC">Divide and conquer :</strong>{" "}
                            Depending on your comparison, you now focus on the
                            half of the list where your target is likely to be.
                          </li>
                          <li>
                            {" "}
                            <strong id="REPEAT">Repeat :</strong> Depending on
                            your comparison, you now focus on the half of the
                            list where your target is likely to be.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 pb-3">
                        <Image
                          src="/img/blogs/Binary-search1.png"
                          alt="Bio O example"
                          width="550"
                          height="200"
                        />
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="WIBSA">
                          Why Is Binary Search Awesome?
                        </h2>

                        <ul>
                          <li>
                            {" "}
                            <strong id="SD">Speed Demon :</strong> Binary Search
                            is incredibly efficient. If you have a huge list,
                            you can find your target with only a few
                            comparisons. It&apos;s like finding the treasure
                            chest in the dungeon by checking just a few doors
                            instead of all of them.
                          </li>
                          <li>
                            {" "}
                            <strong id="SLR">Sorted Lists Rock :</strong> It
                            works on sorted lists. So, if you maintain your data
                            sorted, you can use Binary Search to your advantage.
                          </li>
                          <li>
                            {" "}
                            <strong id="UA">Universal Appeal :</strong> Whether
                            you&apos;re a gamer, a web developer, or anyone who
                            needs to search through data, Binary Search is a
                            valuable skill.
                          </li>
                          <li>
                            {" "}
                            <strong id="PTR">Point to remember :</strong> You
                            should be aware with the face that binary search can
                            only be used if the array or list is in monotonic
                            order i.e increasing or decreasing.
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="TCA">
                          The Code Adventure
                        </h2>
                        <p>
                          Now, let&apos;s put on our coding helmets and see how
                          Binary Search can be implemented. In Python, it might
                          look like this:
                        </p>
                        <Image
                          src="/img/blogs/binary-search.png"
                          alt="Bio O example"
                          width="550"
                          height="200"
                        />
                        <p>
                          In this snippet, we initialize two pointers, left and
                          right, representing the portion of the list we&apos;re
                          currently examining. We then find the middle, compare
                          the element, and update the pointers accordingly. The
                          loop keeps running until we find our treasure (the
                          target) or exhaust all possibilities.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="Conclusion">
                          Conclusion
                        </h2>
                        <p>
                          Binary Search is like the master key that unlocks many
                          doors in the world of programming. Whether you&apos;re
                          building a game, searching through a database, or
                          tackling any problem that involves sorted data, this
                          technique is your trusty sidekick. It&apos;s fast,
                          efficient, and can make your coding adventures a whole
                          lot more exciting. If you&apos;re eager to learn more
                          about Binary Search and other coding escapades, hop on
                          over to my website, &quot;tildd.&quot; We&apos;ve got
                          a treasure trove of knowledge to share. Until next
                          time, keep coding, keep gaming, and keep the adventure
                          alive! Mayur Sehgal signing off.
                        </p>
                      </div>
                      <div className="space-y-2 py-3">
                        <h2 className="text-4xl text-purple" id="PTP">
                          Problems to practice :
                        </h2>
                        <div className="text-purple">
                          <p>
                            <Link href="https://www.codingninjas.com/studio/problems/first-and-last-position-of-an-element-in-sorted-array_1082549?source=youtube&campaign=love_babbar_codestudio2&utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_codestudio2">
                              1) Find first and last position of an element
                            </Link>
                          </p>
                          <p>
                            <Link href="https://leetcode.com/problems/peak-index-in-a-mountain-array/">
                              2) Peak index in a mountain
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
                      <a href="#WIBS">What Is Binary Search?</a>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#SITM">Start in the middle</a>
                        </li>
                        <li>
                          <a href="#COMP">Compare</a>
                        </li>
                        <li>
                          <a href="#DAC">Divide and conquer</a>
                        </li>
                        <li>
                          <a href="#REPEAT">Repeat</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#WIBSA">Why Is Binary Search Awesome?</a>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#SD">Speed Demon</a>
                        </li>
                        <li>
                          <a href="#SLR">Sorted Lists Rock</a>
                        </li>
                        <li>
                          <a href="#UA">Universal Appeal</a>
                        </li>
                        <li>
                          <a href="#PTR">Point to remember</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#TCA">The Code Adventure</a>
                    </li>

                    <li>
                      <a href="#Conclusion">Conclusion</a>
                    </li>
                    <li>
                      <a href="#PTP">Problems to practice</a>
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
