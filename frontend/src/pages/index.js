import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
