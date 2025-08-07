import wilso from "../assets/wilso.png";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiPostcss,
  SiFigma,
} from "react-icons/si";
import React from "react";

function Carreira() {
  return (
    <section id="biografia" className="bg-gray-900 py-20 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-500 text-center mb-16">
          Biografia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8 lg:gap-0">
          {" "}
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-lg border-4 border-green-400">
              {" "}
              <img
                src={wilso}
                alt="Wilson Junior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 bg-gray-800 rounded-2xl shadow-2xl px-6 py-6 lg:px-12 lg:py-8">
            {" "}
            <div className="space-y-4">
              <p className="text-base lg:text-lg font-bold text-gray-300 leading-relaxed">
                {" "}
                Sou desenvolvedor FullStack com forte afinidade pelo Frontend,
                onde me dedico à criação de interfaces modernas, funcionais e
                centradas na experiência do usuário. Valorizo a estética, a
                usabilidade e a performance em cada projeto que desenvolvo.
              </p>
              <p className="text-base lg:text-lg font-bold text-gray-300 leading-relaxed">
                {" "}
                Busco sempre alinhar design e funcionalidade, com atenção aos
                detalhes e foco em entregar soluções completas que resolvam
                problemas reais. Estou constantemente aprimorando minhas
                habilidades no Backend para expandir minha capacidade técnica e
                oferecer resultados ainda mais robustos e escaláveis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 lg:gap-4 mt-12 lg:mt-16 flex-wrap">
          <FaReact className="text-2xl lg:text-3xl text-blue-400" />
          <FaNodeJs className="text-2xl lg:text-3xl text-green-500" />
          <FaJs className="text-2xl lg:text-3xl text-yellow-400" />
          <FaHtml5 className="text-2xl lg:text-3xl text-orange-500" />
          <FaCss3Alt className="text-2xl lg:text-3xl text-blue-500" />
          <SiTypescript className="text-2xl lg:text-3xl text-blue-600" />
          <SiNextdotjs className="text-2xl lg:text-3xl text-white" />
          <SiFlutter className="text-2xl lg:text-3xl text-blue-300" />
          <SiDart className="text-2xl lg:text-3xl text-blue-500" />
          <SiMui className="text-2xl lg:text-3xl text-blue-400" />
          <SiMysql className="text-2xl lg:text-3xl text-blue-600" />
          <SiPostgresql className="text-2xl lg:text-3xl text-blue-600" />
          <SiSupabase className="text-2xl lg:text-3xl text-green-500" />
          <SiVercel className="text-2xl lg:text-3xl text-white" />
          <SiPostcss className="text-2xl lg:text-3xl text-red-500" />
          <SiFigma className="text-2xl lg:text-3xl text-purple-500" />
          <FaGitAlt className="text-2xl lg:text-3xl text-orange-600" />
          <FaGithub className="text-2xl lg:text-3xl text-gray-300" />

          <FaJava className="text-2xl lg:text-3xl text-red-500" />
        </div>
      </div>
    </section>
  );
}
export default Carreira;
