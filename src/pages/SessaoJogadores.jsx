import React from 'react';
import { FaHeart, FaShareAlt, FaComment, FaTrophy, FaFutbol, FaRegClock } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';

export const SessaoJogadores = () => {
  return (
    <div>
      <Header1 />
      <div className="bg-gray-100 min-h-screen py-8 px-4 font-sans">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-6">

            <div className="bg-white rounded-xl shadow-sm">
              <div className="relative">
                <img
                  src="....."
                  alt="Fundo do Perfil"
                  className="w-full h-32 object-cover rounded-t-xl"
                />
                <img
                  src="URL_DA_IMAGEM_LUANA_AQUI"
                  alt="Luana Alves"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white absolute left-1/2 -translate-x-1/2 -bottom-12"
                />
              </div>
              <div className="pt-16 pb-6 text-center">
                <h2 className="text-xl font-bold">Luana Alves</h2>
                <p className="text-md text-gray-500">Posição: <span className='font-bold'>MEI</span></p>
                <p className="text-md text-gray-500">Jogadora do Aurora FC</p>
                <p className="text-gray-600 text-md mt-4 px-6 leading-relaxed text-left">
                  Criativa, inteligente e com visão de jogo apurada. Distribui o jogo, chega no ataque e faço a diferença com passes e finalizações.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <FaFutbol className="text-purple-600 text-xl" />
                  <span><strong className="text-black">19</strong> Gols Marcados</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <FaTrophy className="text-purple-600 text-xl" />
                  <span><strong className="text-black">03</strong> Partidas Jogadas</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <FaRegClock className="text-purple-600 text-xl" />
                  <span><strong className="text-black">60</strong> Minutos em campo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src="...." alt="Aurora FC" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-bold">Aurora FC</h3>
                  <p className="text-md text-gray-500">15 minutos atrás</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Vem aí mais uma chance de mostrar seu talento! A equipe Meninas da Aurora FC está promovendo uma peneira para jogadoras de 14 a 18 anos em São Paulo. As vagas são limitadas, e a oportunidade é incrível!
              </p>
              <div className="flex items-center space-x-2 text-md text-gray-500">
                <MdOutlineLocationOn className="text-lg" />
                <span>Local: Arena Zona Sul</span>
              </div>
              <div className="flex items-center space-x-2 text-md text-gray-500 ">
                <MdOutlineLocationOn className="text-lg" />
                <span>Local: Arena Zona Sul</span>
              </div>
              <div className="flex items-center space-x-2 text-md text-gray-500 mb-2">
                <MdOutlineLocationOn className="text-lg" />
                <span>Local: Arena Zona Sul</span>
              </div>
              <img src="....." alt="Peneira Aurora FC" className="w-full h-auto rounded-xl mb-4" />
              <div className="flex text-md text-gray-500 space-x-4">
                <button className="flex items-center space-x-1 cursor-pointer"><FaHeart /><span>Gostei</span></button>
                <button className="flex items-center space-x-1 cursor-pointer"><FaShareAlt /><span>Compartilhar</span></button>
                <button className="flex items-center space-x-1 cursor-pointer"><FaComment /><span>Comentários</span></button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src="....." alt="Passa a Bola" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-bold">Passa a Bola</h3>
                  <p className="text-md text-gray-500">30 minutos atrás</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "O futebol feminino não precisa de permissão pra existir" — Aira Bonfim no #PABCAST
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="....." alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
                <img src="....." alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
              </div>
              <div className="flex text-md text-gray-500 mt-4 space-x-4">
                <button className="flex items-center space-x-1 cursor-pointer"><FaHeart /><span>Gostei</span></button>
                <button className="flex items-center space-x-1 cursor-pointer"><FaShareAlt /><span>Compartilhar</span></button>
                <button className="flex items-center space-x-1 cursor-pointer"><FaComment /><span>Comentários</span></button>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Últimas peneiras abertas</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-md text-gray-700">
                  <span>Peneira Clube 1</span>
                  <span className="text-purple-600 font-medium">há 2 dias</span>
                </li>
                <li className="flex justify-between items-center text-md text-gray-700">
                  <span>Peneira Clube 2</span>
                  <span className="text-purple-600 font-medium">há 7 dias</span>
                </li>
                <li className="flex justify-between items-center text-md text-gray-700">
                  <span>Peneira Clube 3</span>
                  <span className="text-purple-600 font-medium">há 5 dias</span>
                </li>
                <li className="flex justify-between items-center text-md text-gray-700">
                  <span>Peneira Clube 4</span>
                  <span className="text-purple-600 font-medium">há 3 dias</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Clubes de Luana Alves</h3>
              <div className="flex items-center space-x-4">
                <img src="....." alt="Aurora FC" className="w-10 h-10 rounded-full" />
                <span className="text-gray-800 font-medium">Aurora FC</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};