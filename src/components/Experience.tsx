import React from "react";
import ExperienceCard from "../layouts/ExperienceCard";
const Experience: React.FC = () => {
  const experienceData = [
    {
      position: "Internship in Web Developement - MERN Stack",
      date: "Nov – Jan- 2023",
      company: "Inventus Agency",
      description: [
        "Developed responsive user interfaces using React in MERN Stack projects.",
        "Implemented server-side functionalities with Node.js and Express during the internship.",
      ],
    },
    {
      position: "Internship in Mobile Development – React native",
      date: "July – Sep- 2023",
      company: "Ositcom Ltd",
      description: [
        "Actively contributed to React Native projects for cross-platform mobile app development.",
        "Enhanced skills in React Native, JavaScript, and teamwork.",
      ],
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-16 lg:mt-1 mb-4 lg:mb-7">
        Experience
      </h1>
      <div className=" bg-white p-5 rounded-md">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            companyStyle={{ fontFamily: "inherit", fontSize: "15px", color: "#059669" }}
            dateStyle={{
              color: "#059669",
              fontWeight: "bold",
              fontSize: "17px",
            }}
            descriptionStyle={{ fontWeight: "inherit", fontFamily: "cursive", fontSize: "15px", color: "#2f4f4f" }}
          />
        ))}
      </div>
    </div>
  );
};
export default Experience;
