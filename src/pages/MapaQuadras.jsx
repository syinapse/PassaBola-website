import React from 'react';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import Mapa from "../assets/noticias/Mapa.png";
import peneira from "../assets/noticias/peneira.png";



export const MapaQuadras = () => {
  return (
    <div className='bg-background'>
      <Header1 />
      <div className='bg-gray-100 font-sans relative w-full h-screen overflow-hidden'>
        <img
          src={Mapa}
          alt="Mapa da Região"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex items-center bg-white rounded-full shadow-lg pr-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none px-4 py-2 w-48 rounded-full"
          />
          <FunnelIcon className="h-6 w-6 text-gray-500" />
        </div>

        <div className="absolute top-4 left-4 w-80 bg-secondary-2 rounded-2xl shadow-xl border-2 border-purple-500 p-6 text-white flex flex-col items-start space-y-4">
          {/* Imagem adicionada aqui */}
          <img
            src={peneira}
            alt="Descrição da Imagem"
            className="w-100 h-30 rounded-xl mb-4"
          />

          <div className="flex items-center space-x-3 ">
            <FaMapMarkerAlt className="text-purple-400 text-5xl" />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Av. Corifeu de Azevedo Marques, 3200</h2>
              <p className="text-sm font-light text-purple-200">São Paulo</p>
            </div>
          </div>
          <button className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 cursor-pointer">
            Ver no Maps
          </button>
        </div>

        <div className="absolute" style={{ top: '48%', left: '45%' }}>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -mt-1 -ml-1 w-2 h-2 rounded-full bg-lime-400 animate-ping"></div>
            <div className="w-4 h-4 rounded-full bg-lime-500 border-2 border-white shadow-md"></div>
            <div className="absolute -top-6 left-1/2 -ml-8 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">
              Luana está aqui!
              <div className="absolute -bottom-1 left-1/2 w-0 h-0 border-t-4 border-l-4 border-r-4 border-transparent border-t-black border-opacity-75 -ml-1"></div>
            </div>
          </div>
        </div>

        {/* "Av. Corifeu de Azevedo Marques" Pin */}
        <div className="absolute" style={{ top: '42%', left: '59%' }}>
          <FaMapMarkerAlt className="text-purple-700 text-3xl drop-shadow-lg" />
          <div className="absolute -top-2 left-1/2 -ml-16 w-32 bg-white rounded-md shadow-lg p-2 flex items-center space-x-2 text-xs font-semibold text-gray-800">
            <span>Av. Corifeu de Azevedo Marques, 3200</span>
          </div>
        </div>

        {/* "Quadras de Futebol" Pin */}
        <div className="absolute bottom-40 right-40 flex flex-col items-center">
          <div className="w-10 h-10 bg-green-700 rounded-md shadow-lg flex items-center justify-center">
            <FaExternalLinkAlt className="text-white text-xl" />
          </div>
          <span className="mt-2 text-sm font-semibold text-gray-800 bg-white px-2 py-1 rounded">Quadras de Futebol</span>
        </div>

        {/* Bottom Left Venue Card */}


        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};