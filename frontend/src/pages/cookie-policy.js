import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="px-20 py-10 space-y-10">
        <header>
          <h1 className="text-5xl text-purple">Cookie Policy</h1>
        </header>

        <section>
          <h2 className="text-3xl">1. Introduction</h2>
          <p>
            This Cookie Policy explains how <Link href="/">tildd</Link>{" "}
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies
            and similar technologies when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They are widely used to make websites work or to
            work more efficiently, as well as to provide information to the
            website owners.
          </p>
        </section>

        <section>
          <h2 className="text-3xl">3. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-10">
            <li>To provide essential functionality on our website.</li>
            <li>
              To analyze and improve our website&apos;s performance and user
              experience.
            </li>
            <li>
              To personalize your experience and show you relevant content and
              advertisements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl">4. Types of Cookies We Use</h2>
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-10">
            <li>
              <strong>Strictly Necessary Cookies:</strong> These are essential
              for the website to function properly.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These help us analyze how
              our website is used and improve its performance.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These are used to remember
              your preferences and provide a more personalized experience.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies are used by
              third-party services to deliver personalized advertisements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl">5. Your Cookie Choices</h2>
          <p>
            You can manage your cookie preferences by adjusting your browser
            settings. Please note that disabling certain cookies may affect the
            functionality and user experience of our website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Cookie Policy or
            data privacy practices, please contact us at{" "}
            <strong>
              <Link href="mailto:tilddforme@gmail.com">
                tilddforme@gmail.com
              </Link>
              .
            </strong>
          </p>
        </section>

        <footer>
          <p>
            This Cookie Policy was last updated on <strong>Sep 30,2023</strong>
          </p>
        </footer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
