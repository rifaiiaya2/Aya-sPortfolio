import React from "react";

const Contact: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className="text-center font-semibold text-4xl mt-16 lg:mt-1 mb-4 lg:mb-7">
        Contact Me
      </h1>
      <p className=" mt-2 text-xl text-brightColor text-center text-nowrap">Looking forward to hearing from you! Feel free to drop me a message and let's start a conversation.</p>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap mt-6">
          <div className="relative w-full">
            <label form="name" className="leading-7 text-m text-gray-500">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-300 rounded border-gray-300 focus:border-indigo-400 text-base text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline"></input>
          </div>
        </div>
        <div className="flex flex-wrap mt-6">
          <div className="relative w-full">
            <label form="email" className="leading-7 text-m text-gray-500">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-300 rounded border-gray-300 focus:border-indigo-400 text-base text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline" />
          </div>
        </div>
        <div className="flex flex-wrap mt-6">
          <div className="relative w-full">
            <label form="message" className="leading-7 text-m text-gray-500">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-400 h-36 text-base outline text-gray-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex m-auto text-backgroundColor bg-brightColor border-0 py-2 px-8 focus:outline-none hover:bg-black hover:text-brightColor transition-all rounded text-xl" >Send</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
