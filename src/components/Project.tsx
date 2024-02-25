import React from "react";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
const Project: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Project
      </h1>
      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className="w-full lg:w-2/5">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            style={{ width: "600px" }}
            src={proj1}
            alt="img"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={proj2}
            alt="img"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={proj3}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default Project;
