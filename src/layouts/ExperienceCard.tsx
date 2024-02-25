import React from "react";
interface ExperienceCardProps {
  position: string;
  date: string;
  company: string;
  description: string[];
  companyStyle?: React.CSSProperties;
  dateStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  date,
  company,
  description,
  companyStyle,
  dateStyle,
  descriptionStyle,
}) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
      <div className="w-full lg:w-2/4">
        <h2 className="font-semibold">{position}</h2>
        <div className="mt-2">
          <p style={dateStyle}>{date}</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mt-2 lg:mt-0" style={companyStyle}>{company}</h2>
        <p className="mt-2" style={descriptionStyle}>
          {description.map((des, index) => (
            <li key={index}>{des}</li>
          ))}
        </p>
        <div className="bg-brightColor w-full h-0.5 mt-4"></div>
      </div>
    </div>
  );
};
export default ExperienceCard;
