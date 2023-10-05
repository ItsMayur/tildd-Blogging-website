import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import Head from "next/head";

export default function page() {
  return (
    <div>
      <Head>
        <title>
          Frontend Web Development:Mastering the art of creating Stunning
          Websites!
        </title>
        <meta
          name="description"
          content="Discover the ultimate web development roadmap for beginners, covering HTML, CSS, JavaScript, frameworks, and more. Learn how to kickstart your career in web development"
        />
        <meta
          name="keywords"
          content="Web Development Roadmap,Frontend Web Development,Learning Web Development,Web Development for Beginners,HTML Basics,CSS Fundamentals"
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
                      Frontend Web Development:Mastering the art of creating
                      Stunning Websites!
                    </h1>
                    <p className="text-sm font-bold text-purple">
                      Oct 05 ,2023
                    </p>
                  </header>
                  <main>
                    <>
                      <div>
                        <div>
                          {" "}
                          <div className="text-4xl text-purple">
                            <h2 id="Introduction">Introduction</h2>
                          </div>
                          <p>
                            Whether a developer is at the starting phase of
                            their web development journey or has some experience
                            with some good frontend projects, the major question
                            that sticks in their mind is, 'Are they following
                            the right path or roadmap that will land them in
                            their dream company?' Though there are tons of
                            frameworks and libraries available on the web,
                            making it a little bit confusing for new developers
                            to choose which stack or technology they should
                            learn first, the ideal roadmap that they should
                            follow, even though there are many web stacks
                            available in the industry, but the basics will work
                            fine in each of them.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-4xl text-purple">
                          <h2 id="Roadmap">Roadmap</h2>
                        </div>
                        <h3 className="text-3xl">Basic:</h3>
                        <ol className="list-decimal pl-5 space-y-5">
                          <li>
                            <div>
                              <p>
                                <strong
                                  className="text-purple"
                                  id="Introduction-to-the-Internet"
                                >
                                  Introduction to the Internet:
                                </strong>{" "}
                                Before starting the actual code, a developer
                                should have a brief introduction to the workings
                                of the internet. Even I have seen many people
                                who are good at developing production-level
                                applications but fail in the industry due to a
                                lack of knowledge about the internet. Things
                                that you should know are:
                              </p>
                              <ul className="list-disc pl-10">
                                <li>What is the HTTP protocol?</li>
                                <li>
                                  How do clients and servers communicate with
                                  each other?
                                </li>
                                <li>What is a domain and hosting?</li>
                                <li>What is DNS and how are they used?</li>
                                <li>
                                  The role of a browser in web development
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div>
                              {" "}
                              <p>
                                <strong className="text-purple" id="HTML">
                                  HTML:
                                </strong>{" "}
                                HTML (HyperText Markup Language) is the language
                                that gives the power to structure the webpage.
                                Learn about the boilerplate of HTML, the
                                meaning, and uses of different tags. Even though
                                there are so many of them, you can just learn
                                some major chunks and skip the rest of them for
                                the future. You can refer to W3Schools for this.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong className="text-purple" id="CSS">
                                  CSS:
                                </strong>{" "}
                                Would you like a cake with a basic structure, no
                                topping, no decorations? No one wants a thing
                                that doesn't have any decoration in it, which is
                                why CSS came into play. Through HTML, you can
                                plan a basic structure of a webpage, but when it
                                comes to adding colors, animations, and effects
                                to the page, CSS plays an important role. I
                                would prefer to learn the basics of CSS and move
                                to the next part, and you can learn more
                                according to your needs.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong className="text-purple" id="PROJECT-1">
                                  Project 1:{" "}
                                </strong>
                                After completing the basics of HTML and CSS, you
                                are ready for your first project. You can take
                                any website on the internet and try to clone its
                                design. For me, it was Instagram a couple of
                                years ago. Though this is not necessary, but
                                mugging is not a good method to learn things
                                when you don't know how to apply them in real
                                life. If you're still connected with us, then
                                don't forget to share your first project with us
                                by tagging our social handles.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong className="text-purple" id="JavaScript">
                                  JavaScript:
                                </strong>{" "}
                                JavaScript is a programming language that helps
                                a web developer add interactivity to web pages.
                                Even if you have made a webpage, it is useless
                                if it doesn't do necessary work after a click.
                                Writing your functions to do jobs that users
                                require, manipulating the DOM, and interacting
                                with backend servers through Fetch API and Ajax
                                are common things that JavaScript is used for in
                                a webpage. You can get more out of it according
                                to your needs. The major topics I will recommend
                                are:
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong className="text-purple" id="Project-2">
                                  Project 2:
                                </strong>
                                By this point, we are done with the basics of
                                frontend web development. At this time, you can
                                learn a Version Control System like Git and
                                Github along with a project. At this moment, I
                                will recommend you to make a mini-game to get a
                                good grip on what we have learned so far. It is
                                up to you whether you want to make a small game
                                like Zero Cross or thousand-line code games like
                                Flappy Bird and Minesweeper.
                              </p>
                            </div>
                          </li>
                        </ol>
                        <h3 className="text-3xl">
                          Advanced Frontend Concepts:
                        </h3>
                        <ol className="list-decimal pl-5 space-y-5">
                          <li>
                            <div>
                              <p>
                                <strong
                                  className="text-purple"
                                  id="Working-with-Frameworks"
                                >
                                  Working with Frameworks:
                                </strong>
                                Frameworks are collections of libraries that
                                help you in the development of the product
                                efficiently and easily. You will have many
                                options here; you can go with React JS, Angular
                                JS, Vue JS, or any other trending one. It's up
                                to you to do your research and pick the right
                                one, but if you are still confused, pick React
                                JS, as its industry is growing drastically.
                              </p>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <div>
                              <p>
                                <strong
                                  className="text-purple"
                                  id="Writing-CSS"
                                >
                                  Writing CSS:
                                </strong>
                                Learn CSS libraries like Tailwind, Bootstrap,
                                and Radix UI to use prewritten CSS, so you don't
                                have to write those thousand-line code in your
                                CSS file. These are just optional and will
                                reduce your work, helping you design your
                                webpage faster.
                              </p>
                            </div>
                          </li>
                          <li>
                            {" "}
                            <div>
                              <p>
                                <strong
                                  className="text-purple"
                                  id="Build-Tools"
                                >
                                  Build Tools:
                                </strong>
                                You have done a good amount of work until now.
                                So, this is the time to take your first website
                                online. It is easy with basic HTML, CSS, and
                                JavaScript. But when you are with frameworks
                                like React, it is not recommended to push your
                                development build online; that's why we use
                                module bundlers, task runners to make a
                                production build, which is the compressed and
                                optimal version of the original one.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong
                                  className="text-purple"
                                  id="In-Your-Hands"
                                >
                                  In Your Hands:
                                </strong>
                                Until now, you have learned how to make a
                                frontend app and send it to production. Now it
                                is up to you whether you want to dive deep into
                                topics like authentication, Server-Side
                                Rendering, Progressive Web Apps, or switch to
                                mobile JS frameworks like Flutter, React Native,
                                to get a new tool in your hand."
                              </p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="space-y-2">
                        {" "}
                        <div className="text-4xl text-purple">
                          <h2 id="Conclusion">Conclusion</h2>
                        </div>
                        <div>
                          <p>
                            In conclusion, a frontend web developer's journey
                            begins with understanding the fundamental concepts
                            of the internet, including HTTP, client-server
                            communication, domain, hosting, and the role of
                            browser. Mastering HTML and CSS builds the base for
                            structuring and beautifying webpages. A practical
                            approach is to clone an existing websites to apply
                            the knowledge. JavaScript is essential for
                            interactivity, DOM manipulation, and server
                            interactions. Learning Git&GitHub, coupled with a
                            mini-game project, strengthens skills. Advancing
                            into frameworks like React and exploring CSS
                            libraries streamlines development. Finally, grasp
                            build tools for production deployment. From there,
                            the path diverges, with options ranging from
                            advanced topics like authentication and server-side
                            rendering to mobile app development with frameworks
                            like Flutter or React Native.
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
                  </div>
                  <div></div>
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
                      <a href="#Roadmap">Roadmap</a>
                      <p className="text-black">Basic:</p>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#Introduction-to-the-Internet">
                            Introduction to the Internet
                          </a>
                        </li>
                        <li>
                          <a href="#HTML">HTML</a>
                        </li>
                        <li>
                          <a href="#CSS">CSS</a>
                        </li>
                        <li>
                          <a href="#PROJECT-1">Project 1</a>
                        </li>
                        <li>
                          <a href="#JavaScript">JavaScript</a>
                        </li>
                        <li>
                          <a href="#Project-2">Project 2</a>
                        </li>
                      </ul>
                      <p className="text-black">Advanced Frontend Concepts:</p>
                      <ul className="list-disc pl-5">
                        <li>
                          <a href="#Working-with-Frameworks">
                            Working with Frameworks
                          </a>
                        </li>
                        <li>
                          <a href="#Writing-CSS">Writing CSS</a>
                        </li>
                        <li>
                          <a href="#Build-Tools">Build Tools</a>
                        </li>
                        <li>
                          <a href="#In-Your-Hands">In Your Hands</a>
                        </li>
                      </ul>
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
