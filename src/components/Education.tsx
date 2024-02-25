import React from "react";
import EducationCard from "../layouts/EducationCard";
const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Education
      </h1>

      <div className="bg-white p-5 rounded-md">
        <EducationCard
          title="Bachelor of Science in Communication Engineering"
          subtitle="Lebanese International University"
          date="2018-2021"
          description="GPA: 3.49 / 4 - Honor"
          subtitleStyle={{ fontFamily: "inherit", fontSize: "14px" }}
          dateStyle={{ color: "#059669", fontWeight: "bold", fontSize: "17px" }}
          descriptionStyle={{ fontWeight: "inherit", fontFamily: "cursive", fontSize: "15px", color: "#059669" }}
        />
        <EducationCard
          title="Master’s in Computer and Communication Engineering"
          subtitle="Lebanese International University"
          date="2021-2023"
          description="GPA: 3.03 / 4   -  Good"
          subtitleStyle={{ fontFamily: "inherit", fontSize: "14px" }}
          dateStyle={{ color: "#059669", fontWeight: "bold", fontSize: "17px" }}
          descriptionStyle={{ fontWeight: "inherit", fontFamily: "cursive", fontSize: "15px", color: "#059669" }}
        />
      </div>
    </div>
  );
};
export default Education;
