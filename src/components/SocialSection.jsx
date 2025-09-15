import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; 
import youtubeImage from '../assets/PassaBola/Avatar.png';

export const SocialSection = () => {
  return (
    <section id="redes-sociais" className="bg-gray-100 py-20 px-6 font-quando">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
          Redes Sociais
        </h2>
        
      
        <div className="max-w-5xl mx-auto bg-[#6D4B93] text-white rounded-3xl shadow-lg p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <img 
            src={youtubeImage} 
            alt="Canal do Youtube" 
            className="w-48 h-48 rounded-full border-4 border-white object-cover flex-shrink-0"
          />
          
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2 text-md font-semibold mb-3">
              <PlayIcon className="h-5 w-5" />
              <span>Só no Youtube</span>
            </p>
            
            {/* Métricas com cores customizadas direto na classe */}
            <p className="text-3xl text-white/90">
              <span className="font-bold text-5xl text-white">210</span> <span className="font-bold text-[#BC6FF1]">Mil+</span> inscritos
            </p>
            <p className="text-3xl text-white/90">
              <span className="font-bold text-5xl text-white">82</span> <span className="font-bold text-[#BC6FF1]">Mi+</span> views
            </p>
            <p className="text-3xl text-white/90">
              <span className="font-bold text-5xl text-white">850</span> <span className="font-bold text-[#BC6FF1]">+</span> vídeos
            </p>
          </div>

          <div className="text-center md:text-left pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-white/30 mt-8 md:mt-0 pt-8 md:pt-0">
            <p className="font-bold mb-3 text-lg">O que esperar do nosso canal?</p>
            <ul className="list-disc list-inside text-base space-y-1">
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