import React, { ReactNode } from "react";
interface SkillsCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
}
const SkillsCard: React.FC<SkillsCardProps> = ({ icon, title, description }) => {

  return (
    <div className="flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md ">
      <div>
        <span>{icon}</span>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="font-light hover:font-semibold text-brightColor">{description}</p>
    </div>
  )
}
export default SkillsCard