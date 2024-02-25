import React from "react";
const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:gap-8 px-5 bg-backgroundColor lg:px-32">
      <div className="mt-16">
        <h1 className="text-4xl font-semibold text-center lg:mt-6">About Me</h1>
      </div>
      <div className="mb-4">
        <h2 className="text-3xl tracking-widest uppercase font-light mb-6">Welcome to my World!</h2>
        <p className="mt-6 lg:mt-2 text-xl text-center">
          <span className="text-2xl text-brightColor tracking-widest font-bold">I'm Aya Al Rifaii </span>
          an experienced software engineer driven by a profound passion for crafting innovative solutions. With a solid educational background, I've journeyed through diverse projects, mastering the art of software development. My commitment to excellence extends beyond code – I thrive on challenges, foster collaboration, and find joy in the journey of continual learning. Get to know me beyond the code, explore my professional journey, and discover the person behind the pixels.
        </p>
      </div>
    </div>


  )
}
export default About;