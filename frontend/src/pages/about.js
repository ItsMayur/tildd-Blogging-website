import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import TeamCard from "../components/TeamCard";
import ContactCard from "../components/ContactCard";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex items-center max-md:h-auto py-10 px-2 justify-center space-x-5 max-md:flex-col">
          <div className="my-5 px-4 max-md:w-screen flex flex-col items-center ">
            <Image
              src="/img/about-img.png"
              alt="tildd"
              srcset=""
              id="AboutLogo"
              className=""
              width="500"
              height="500"
            />
          </div>
          <div className="w-3/6 text-sm space-y-3 max-md:w-11/12 ">
            <h2 className="text-3xl font-bold text-purple">
              Enabling Dreams, Fueling Ambitions
            </h2>{" "}
            <p>
              Welcome to Tildd, where knowledge meets innovation, and learning
              knows no boundaries. At Tildd, we believe that education is the
              key to unlocking the limitless potential within each individual.
              Our mission is simple: to empower you with the skills and
              knowledge needed to thrive in the ever-evolving world of
              electronics, robotics, and coding. With a passion for education
              and a commitment to excellence, Tildd offers a dynamic platform
              that brings these exciting fields to your fingertips. Whether
              you&apos;re a curious beginner or an aspiring expert, our
              comprehensive courses, expert instructors, and hands-on projects
              cater to learners of all levels. Discover the fascinating world of
              electronics, where circuits come to life and ideas turn into
              reality. Dive into robotics, where creativity and technology unite
              to build the robots of tomorrow. Explore the art of coding, where
              you&apos;ll write the language of the future. At Tildd, we
              don&apos;t just provide education; we nurture curiosity, foster
              innovation, and ignite a lifelong love for learning. Join our
              vibrant community of learners, and together, let&apos;s embark on
              a journey of discovery, growth, and achievement. Your dreams, our
              guidance - let&apos;s learn, create, and innovate with Tildd. Join
              us today and start your educational adventure with Tildd - where
              knowledge becomes your superpower.
            </p>
          </div>
        </div>
        <div className="h-auto w-screen bg-purple flex justify-evenly  items-center max-md:py-5 max-md:flex-col">
          <div className="text-white text-5xl">
            <h1>Meet The</h1>
            <h1>Team</h1>
          </div>
          <div className="flex w-3/6 flex-wrap max-md:w-screen justify-center">
            <TeamCard />
          </div>
        </div>
        <div>
          <ContactCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
