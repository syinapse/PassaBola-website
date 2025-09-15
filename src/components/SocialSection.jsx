// src/components/SocialSection.jsx
import React from 'react';
import youtubeImage from '../assets/PassaBola/Avatar.png'; // Substitua

export const SocialSection = () => {
  return (
    <section id="redes-sociais" className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Redes Sociais</h2>
        <div className="max-w-4xl mx-auto bg-purple-700 text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <img src={youtubeImage} alt="Canal do Youtube" className="w-32 h-32 rounded-full border-4 border-white flex-shrink-0"/>
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Só no youtube</p>
            <p><span className="text-4xl font-bold">210 Mil+</span> inscritos</p>
            <p><span className="text-4xl font-bold">82 Mi+</span> views</p>
            <p><span className="text-4xl font-bold">850+</span> vídeos</p>
          </div>
          <div className="text-center md:text-left pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/30 mt-6 md:mt-0 pt-6 md:pt-0">
            <p className="font-bold mb-2">O que esperar do nosso canal?</p>
            <ul className="list-disc list-inside">
              <li>Podcast FalaBB</li>
              <li>Desafios de Futebol</li>
              <li>Curiosidades do Futebol Feminino</li>
              <li>Notícias quentes do mundo da bola</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};