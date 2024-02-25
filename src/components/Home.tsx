import React from "react";
import home from "../assets/img/home.png";
const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-2 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/5 space-y-5">
        <h1 className="text-5xl font-semibold leading-tight mt-24">
          I'm Aya Al Rifaii
          <span className="text-brightColor"> Full Stack Developer</span>
        </h1>
        <p>
          Experienced software engineer with a robust educational   foundation and a successful history of delivering top-tier software solutions. I am passionate about applying my technical expertise to drive innovation, contribute to project success, and excel in dynamic roles within reputable organizations. Committed to continuous growth in the ever-evolving field of software engineering.
        </p>
      </div>
      <div className="mt-15">
        <img src={home} alt="home" className="object-contain h-130 w-96 pt-20 ml-12" />
      </div>
    </div>
  );
};
export default Home;
