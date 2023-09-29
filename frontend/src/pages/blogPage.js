import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function page() {
  return (
    <div>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="flex justify-evenly my-16">
            <div id="BlogPage" className="w-3/6">
              <div id="BlogBody">
                <article id="BlogContent">
                  <header id="BlogTitle">
                    <h1 className="text-5xl">SAMPLE BLOG 1</h1>
                    <p className="text-sm font-bold text-purple">
                      Jan 24 ,2003
                    </p>
                  </header>
                  <main>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum eaque non ex repellat! Explicabo ipsam atque facilis
                    ex magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    eaque non ex repellat! Explicabo ipsam atque facilis ex
                    magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    eaque non ex repellat! Explicabo ipsam atque facilis ex
                    magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    eaque non ex repellat! Explicabo ipsam atque facilis ex
                    magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    eaque non ex repellat! Explicabo ipsam atque facilis ex
                    magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    eaque non ex repellat! Explicabo ipsam atque facilis ex
                    magnam, animi ad et id totam unde eum maxime quas officia
                    quae?Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsam totam ea unde velit ipsum cumque debitis? Quae
                    voluptates perferendis cupiditate maiores delectus, ipsam
                    corporis accusamus eligendi assumenda? Nisi, qui ut!
                  </main>
                </article>
                <div
                  id="BlogAuthor"
                  className="flex justify-between items-center font-bold text-purple my-2"
                >
                  <p className="featured-btns">Author : Mayur sehgal</p>
                  <div id="BlogShare ">
                    <a href="" className="mr-10 featured-btns">
                      Share
                    </a>
                  </div>
                </div>
                <div id="SimilarReads" className="py-5">
                  <div>
                    <h2 className="text-2xl">Similar Reads</h2>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div id="TableOfContent" className="w-2/6">
              <div className=" px-10 py-10 rounded-2xl border-purple border-2 space-y-2 text-purple">
                <div>
                  <h2 className="text-2xl ">Table of content</h2>
                </div>
                <div className="">
                  <ol className="list-decimal pl-6">
                    <li>
                      <a href="">
                        This is sample heading 1 and i want to check my table of
                        content
                      </a>
                    </li>

                    <li>
                      <a href="">
                        This is sample heading 1 and i want to check my table of
                        content
                      </a>
                    </li>

                    <li>
                      <a href="">
                        This is sample heading 1 and i want to check my table of
                        content
                      </a>
                    </li>

                    <li>
                      <a href="">
                        This is sample heading 1 and i want to check my table of
                        content
                      </a>
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
