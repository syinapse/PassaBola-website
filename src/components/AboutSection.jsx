// src/components/AboutSection.jsx
import React from 'react';
import sobreImage from '../assets/PassaBola/AboutUs.png'; // Substitua

export const AboutSection = () => {
  return (
    <section id="sobre" className="bg-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Sobre a gente</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 border-2 border-purple-200">
          <img src={sobreImage} alt="O time Passe a Bola" className="w-full md:w-1/3 rounded-lg"/>
          <div className="text-left text-gray-600">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">O que somos</h3>
              <p>O Passe a Bola é um canal no YouTube criado pela NWB (produtora do Desimpedidos)...</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Missão</h3>
              <p>O Passe a Bola tem como missão fortalecer o protagonismo feminino no esporte...</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Trajetória</h3>
              <p>• Desde 05/2021 gravando vídeos para internet<br/>• Parceria com YT para transmissão...<br/>• +210 Mil inscritos no canal apenas 4 anos<br/>• +82 Milhões de pessoas alcançadas<br/>• +850 vídeos postados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};