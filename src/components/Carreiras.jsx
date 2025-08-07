import React from "react";
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
import balde from "../assets/balde.png";

function Carreiras() {
  return (
    <section id="carreira" className="bg-gray-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-500 text-center mb-8 lg:mb-16">
          Carreira
        </h2>

        <div className="space-y-6 lg:space-y-8">
          <div className="bg-gray-800 border-l-4 border-green-500 rounded-lg p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl lg:text-2xl">
                    WJ
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-green-500 text-sm lg:text-base font-medium mb-1">
                    Empresa:
                  </h3>
                  <h4 className="text-white text-xl lg:text-2xl font-bold">
                    Desenvolvedor Autônomo
                  </h4>
                  <p className="text-green-400 text-sm lg:text-base">
                    <span className="font-medium">Período:</span> Jan/2025 -
                    Atualmente
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-white text-base lg:text-lg font-semibold mb-3">
                    Descrição:
                  </h5>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Após minha experiência em gestão empresarial, decidi seguir
                    a área de desenvolvimento, descobrindo uma verdadeira paixão
                    pela tecnologia. Como Desenvolvedor FullStack, criei
                    soluções completas para web e mobile, incluindo softwares
                    personalizados para minha empresa anterior. Atuo em todas as
                    etapas do desenvolvimento, desde planejamento até deploy,
                    sempre focando em qualidade, performance e experiência do
                    usuário em projetos diversos.
                  </p>
                </div>

                <div>
                  <h5 className="text-white text-base lg:text-lg font-semibold mb-3">
                    Tecnologias utilizadas:
                  </h5>
                  <div className="flex gap-3 flex-wrap">
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
              </div>
            </div>
          </div>
          <div className="bg-gray-800 border-l-4 border-green-500 rounded-lg p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl lg:text-2xl">
                    <img
                      src={balde}
                      alt="Logo Mega Tintas"
                      className="w-full h-full object-cover"
                    />
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-green-500 text-sm lg:text-base font-medium mb-1">
                    Empresa:
                  </h3>
                  <h4 className="text-white text-xl lg:text-2xl font-bold">
                    Mega Tintas
                  </h4>
                  <p className="text-green-400 text-sm lg:text-base">
                    <span className="font-medium">Período:</span> Jan/2020 -
                    Jan/2025
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-white text-base lg:text-lg font-semibold mb-3">
                    Descrição:
                  </h5>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Atuando como Gerente e Gerente Financeiro, fui responsável
                    por liderar operações comerciais, controlar estoque,
                    gerenciar equipes de vendas e supervisionar o setor
                    financeiro. Desenvolvi estratégias de crescimento, coordenei
                    processos internos e tomei decisões estratégicas para
                    expandir os negócios da empresa. Minha atuação abrangia
                    desde o controle de custos até a liderança de vendas e
                    gestão de pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carreiras;
