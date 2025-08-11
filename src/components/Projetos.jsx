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
  FaCss3,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiFlutter,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiFigma,
  SiDart,
  SiSupabase,
  SiVercel,
  SiPostcss,
  SiJavascript,
  SiWhatsapp,
} from "react-icons/si";
import megaTintas from "../assets/homeMegaTintas.png";
import perfilDesafio from "../assets/perfildesafio.png";
import entregaja from "../assets/entregaja.png";
import pokedex from "../assets/pokedex.png";
import wilsonmarket from "../assets/wilsonmarket.png";
import relogiodigital from "../assets/relogio.png";

import React from "react";

function Projetos() {
  return (
    <section id="projetos" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-500 text-center mb-8 lg:mb-16">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={megaTintas}
                alt="Mega Tintas Website"
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Mega Tintas WebSite
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              Website desenvolvido para empresa de tintas, com foco em mostrar e
              apresentar a empresa. Interface moderna e responsiva.
            </p>
            <div className="flex gap-2 mb-4 align-center justify-center">
              <SiTypescript className="text-xl lg:text-2xl text-blue-600" />
              <FaReact className="text-xl lg:text-2xl text-blue-400" />
              <FaHtml5 className="text-xl lg:text-2xl text-orange-500" />
              <FaCss3Alt className="text-xl lg:text-2xl text-blue-500" />
            </div>
            <a
              href="https://megatintasvg.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Mega Tintas Website"
            ></a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={pokedex}
                alt="Pokedex"
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Pokedex
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              Uma Pokédex moderna desenvolvida com React e JavaScript,
              utilizando Material UI para interface e consumindo a PokéAPI para
              obter dados dos Pokémon em tempo real.
            </p>
            <div className="flex gap-2 mb-4 align-center justify-center">
              <FaReact className="text-xl lg:text-2xl text-blue-400" />
              <SiJavascript className="text-xl lg:text-2xl text-blue-600" />
              <SiMui className="text-xl lg:text-2xl text-blue-400" />
              <FaJs className="text-xl lg:text-2xl text-yellow-400" />
            </div>
            <a
              href="https://poke-dex-ruby.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Pokedex"
            ></a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={entregaja}
                alt="Entregaja "
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Entrega JA desktop
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              Sistema completo de gerenciamento de entregas desenvolvido com
              Flutter para Desktop e PostgreSQL. Cadastro de clientes,
              entregadores e integração com mapas via Mapbox.
            </p>
            <div className="flex gap-2 mb-4 align-center justify-center">
              <SiFlutter className="text-xl lg:text-2xl text-blue-300" />
              <SiDart className="text-xl lg:text-2xl text-blue-500" />
              <SiPostgresql className="text-xl lg:text-2xl text-blue-600" />
            </div>
            <a
              href="https://github.com/wilzo/flutter_appEntrega"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Entrega JA"
            ></a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={wilsonmarket}
                alt="wilson market"
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Wilson Market
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              E-commerce completo com Next.js 15, TypeScript, Supabase e
              integração WhatsApp. Sistema de carrinho, checkout, autenticação e
              upload de imagens.-
            </p>
            <div className="flex gap-1 mb-4 align-center justify-center flex-wrap">
              <SiNextdotjs className="text-xl lg:text-2xl text-white" />
              <SiTypescript className="text-xl lg:text-2xl text-blue-600" />
              <FaReact className="text-xl lg:text-2xl text-blue-400" />
              <SiSupabase className="text-xl lg:text-2xl text-green-500" />
              <FaCss3Alt className="text-xl lg:text-2xl text-blue-500" />
              <SiVercel className="text-xl lg:text-2xl text-white" />
              <SiWhatsapp className="text-xl lg:text-2xl text-green-600" />
              <SiPostcss className="text-xl lg:text-2xl text-red-500" />
            </div>
            <a
              href="https://stg-catalog-challenge-plhg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Wilson Market"
            ></a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={perfilDesafio}
                alt="Perfil Desafio"
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Lista de Perfis Gerenciaveis
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              Aplicação Fullstack para gerenciamento de perfis de usuários.
              Desenvolvida com React + Material UI no frontend e Node.js + MySQL
              no backend. Deploy na Vercel e Railway.
            </p>
            <div className="flex gap-2 mb-4 align-center justify-center">
              <FaReact className="text-xl lg:text-2xl text-blue-400" />
              <FaNodeJs className="text-xl lg:text-2xl text-green-500" />
              <SiMui className="text-xl lg:text-2xl text-blue-400" />
              <SiMysql className="text-xl lg:text-2xl text-blue-600" />
            </div>
            <a
              href="https://perfil-desafio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Lista de Perfis Gerenciaveis"
            ></a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={relogiodigital}
                alt="Relógio Digital"
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-center font-bold text-red-500 mb-2">
              Relogio Digital
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold text-center">
              Relógio digital responsivo com alternância entre modo escuro e
              claro. Desenvolvido com JavaScript puro, HTML e CSS. Interface
              elegante e funcional.
            </p>
            <div className="flex gap-2 mb-4 align-center justify-center">
              <SiJavascript className="text-xl lg:text-2xl text-blue-400" />
              <FaHtml5 className="text-xl lg:text-2xl text-blue-400" />
              <FaCss3Alt className="text-xl lg:text-2xl text-blue-500" />
            </div>
            <a
              href="https://github.com/wilzo/relogioDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Abrir Relógio Digital"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
