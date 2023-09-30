import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import TeamCard from "../components/TeamCard";
import ContactCard from "../components/ContactCard";

const page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex items-center h-screen justify-center space-x-5">
          <div className="my-5 px-4 w-2/6 flex flex-col items-center ">
            <img
              src="/img/about-img.png"
              alt="tildd"
              srcset=""
              id="AboutLogo"
            />
          </div>
          <div className="w-3/6 text-sm space-y-3">
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
              you're a curious beginner or an aspiring expert, our comprehensive
              courses, expert instructors, and hands-on projects cater to
              learners of all levels. Discover the fascinating world of
              electronics, where circuits come to life and ideas turn into
              reality. Dive into robotics, where creativity and technology unite
              to build the robots of tomorrow. Explore the art of coding, where
              you'll write the language of the future. At Tildd, we don't just
              provide education; we nurture curiosity, foster innovation, and
              ignite a lifelong love for learning. Join our vibrant community of
              learners, and together, let's embark on a journey of discovery,
              growth, and achievement. Your dreams, our guidance - let's learn,
              create, and innovate with Tildd. Join us today and start your
              educational adventure with Tildd - where knowledge becomes your
              superpower.
            </p>
          </div>
        </div>
        <div className="h-screen w-screen bg-purple flex justify-evenly items-center">
          <div className="text-white text-5xl">
            <h1>Meet The</h1>
            <h1>Team</h1>
          </div>
          <div className="flex w-3/6 flex-wrap">
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
