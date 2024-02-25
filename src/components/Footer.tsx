import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
const Footer: React.FC = () => {
  const LinkedinUrl = "https://www.linkedin.com/in/rifaii-aya-58966623ar/";
  const GithubUrl = "https://github.com/rifaiiaya2";
  const EmailUrl = "https://mail.google.com/mail/u/0/#inbox?compose=new";
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className="flex gap-10">
        <a href={LinkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="hover:text-brightColor transition-all cursor-pointer" />
        </a>
        <a href={GithubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={32} className="hover:text-brightColor transition-all cursor-pointer" />
        </a>
        <a href={EmailUrl} target="_blank" rel="noopener noreferrer">
          <FaMailBulk size={35} className="hover:text-brightColor transition-all cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold hover:text-brightColor">Aya.</h1>
      </div>
    </div>

  )
}
export default Footer;