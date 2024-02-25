import React from "react";
interface EducationCardProps {
  title: string;
  date: string;
  subtitle: string;
  description: string;
  subtitleStyle?: React.CSSProperties;
  dateStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
}
const EducationCard: React.FC<EducationCardProps> = ({
  title,
  date,
  subtitle,
  description,
  subtitleStyle,
  dateStyle,
  descriptionStyle,
}) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
      <div className="w-full lg:w-2/4">
        <h2 className="font-semibold">{title}</h2>
        <div className="mt-2">
          <p style={dateStyle}>{date}</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mt-2 lg:mt-0" style={subtitleStyle}>{subtitle}</h2>
        <p className="mt-2" style={descriptionStyle}>{description}</p>
        <div className="bg-neutral-300 w-full h-0.5 mt-4"></div>
      </div>
    </div>

  );
};
export default EducationCard;