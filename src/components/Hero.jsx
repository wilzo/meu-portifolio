import wilso from "../assets/wilso.png";
import { FaReact, FaNodeJs, FaJs, FaChevronDown } from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiFlutter } from "react-icons/si";

function Hero() {
  return (
    <div
      id="hero"
      className="max-w-7xl mx-auto flex flex-col lg:flex-row relative items-center gap-8 lg:gap-16 min-h-screen bg-gray-900 px-4 lg:px-8 pt-20 lg:pt-24"
    >
      {/* Coluna do texto */}
      <div className="flex-1">
        <h2 className="text-2xl lg:text-4xl font-medium text-gray-300 text-center lg:text-left">
          Ola, eu sou
        </h2>
        <h1 className="text-4xl lg:text-8xl font-extrabold mt-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left">
          Wilson Junior
        </h1>
        <h3 className="text-2xl lg:text-5xl font-bold mt-4 text-green-500 text-center lg:text-left">
          Desenvolvedor FullStack
        </h3>
        <div className="mt-6">
          <h4 className="text-2xl lg:text-4xl font-medium mb-4 text-center lg:text-left">
            Principais Tecnologias:
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 mt-8 lg:mt-12">
            <FaReact className="text-4xl lg:text-7xl text-blue-400" />
            <FaNodeJs className="text-4xl lg:text-7xl text-green-500" />
            <SiTypescript className="text-4xl lg:text-7xl text-blue-600" />
            <FaJs className="text-4xl lg:text-7xl text-yellow-400" />
            <SiNextdotjs className="text-4xl lg:text-7xl text-white" />
            <SiFlutter className="text-4xl lg:text-7xl text-blue-300" />
          </div>
        </div>
      </div>
      <div className="w-64 h-64 lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full border-2 border-blue-900 order-first lg:order-last">
        {" "}
        <img
          src={wilso}
          alt="Wilson Junior"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Ver mais</span>
          <FaChevronDown className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
