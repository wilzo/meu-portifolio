import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4 lg:gap-0">
        <div className="text-lg font-semibold">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            <a href="#hero">Wilson Junior</a>
          </h1>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm lg:text-md font-medium">
          {" "}
          <a
            href="#biografia"
            className="text-2xl font-semibold text-green-500"
          >
            Biografia
          </a>
          <a href="#projetos" className="text-2xl font-semibold text-green-500">
            Projetos
          </a>
          <a href="#carreira" className="text-2xl font-semibold text-green-500">
            Carreira
          </a>
        </div>

        <div className="flex space-x-3 lg:space-x-4 items-center">
          {" "}
          <a
            href="https://github.com/wilzo"
            target="_blank"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} className="text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/wilson-hernandes-cardoso-junior-604653208/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={24} className="text-blue-500" />
          </a>
          <a
            href="mailto:wilson.hernandesjunior@gmail.com"
            className="hover:text-red-500"
          >
            <FaEnvelope size={24} className="text-red-400" />
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
