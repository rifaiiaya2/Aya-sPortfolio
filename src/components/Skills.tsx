import React from "react";
import SkillsCard from "../layouts/SkillsCard";
import { BiCodeAlt } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { FaAngular } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
const Skills: React.FC = () => {
  const webicon = <BiCodeAlt size={55} className="text-brightColor" />
  const angicon = <FaAngular size={55} className="text-brightColor" />
  const neticon = <DiDotnet size={55} className="text-brightColor" />
  const reacticon = <GrReactjs size={55} className="text-brightColor" />
  const dbicon = <FaDatabase size={55} className="text-brightColor" />
  const mobicon = <BsAndroid size={55} className="text-brightColor" />

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">My Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
        <SkillsCard icon={webicon} title="Web0" description="HTML, CSS, JS, Nodejs, Git" />
        <SkillsCard icon={angicon} title="Angular" description="Interceptor, Routing, RxJx" />
        <SkillsCard icon={neticon} title=".Net Core" description="ASP.Net, Route, Swagger" />
        <SkillsCard icon={reacticon} title="ReactJS" description="Hooks, Routing, Redux" />
        <SkillsCard icon={dbicon} title="DataBase" description="SQL, MongoDB, FireBase" />
        <SkillsCard icon={mobicon} title="React Native" description="Flatlist, Sqlite, Navigation, Publish" />
      </div>
    </div>
  )
}
export default Skills;