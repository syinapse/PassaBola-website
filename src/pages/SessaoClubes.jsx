import React from 'react';
import { FaHeart, FaShareAlt, FaComment, FaTrophy, FaFutbol, FaRegClock } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import logo from "../assets/logo.png";
import peneira from "../assets/peneira.png";
import fundo from "../assets/fundo.png";
import luana from "../assets/luana.png";
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import like from '../assets/icons/like.png';
import comentarios from '../assets/icons/cometarios.png';
import compartilhar from '../assets/icons/compartilhar.png';


export const SessaoClubes = () => {
    return (
        <div>
            <Header1 />
            <div className="bg-background min-h-screen py-8 px-4 font-sans">
                <div className="container mx-auto flex flex-col md:flex-row gap-6">

                    <div className="flex flex-col space-y-6 w-full md:w-1/4">
                        <div className="bg-white rounded-xl shadow-sm h-fit">
                            <div className="relative">
                                <img
                                    src={peneira}
                                    alt="Fundo do Perfil"
                                    className="w-full h-32 object-cover rounded-t-xl"
                                />
                                <img
                                    src={logo}
                                    alt="Luana Alves"
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white absolute left-1/2 -translate-x-1/2 -bottom-12"
                                />
                            </div>
                            <div className="pt-16 pb-6 text-center">
                                <h2 className="text-xl font-bold">Luana Alves</h2>
                                <p className="text-md text-gray-500">
                                    Posição: <span className="font-bold">MEI</span>
                                </p>
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
                                    <span>
                                        <strong className="text-purple-600 text-md">19</strong> Peneiras Organizadas
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <FaTrophy className="text-purple-600 text-xl" />
                                    <span>
                                        <strong className="text-purple-600 text-md">03</strong> Titulos Conquistados
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <FaRegClock className="text-purple-600 text-xl" />
                                    <span>
                                        <strong className="text-purple-600 text-md">60</strong> Jogadoras de Base
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 w-full md:w-2/5">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={logo} alt="Aurora FC" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold">Aurora FC</h3>
                                    <p className="text-md text-gray-500">15 minutos atrás</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                🎯 Vem aí mais uma chance de mostrar seu talento!A equipe Meninas da Aurora FC está promovendo uma peneira para jogadoras de 14 a 18 anos em São Paulo. As vagas são limitadas, e a oportunidade é incrível!              </p>
                            <div className="flex items-center text-md text-black">
                                <span>📍 Local: Arena Zona Sul</span>
                            </div>
                            <div className="flex items-center text-md text-black">
                                <span>📅 Data: 25 de junho</span>
                            </div>
                            <div className="flex items-center text-md text-back">
                                <span>🕒 Horário: 9h às 12h</span>
                            </div>
                            <div className="flex items-center text-md text-black mb-6">
                                <span>👉 Inscrições abertas até dia 20!</span>
                            </div>


                            <img src={peneira} alt="Peneira Aurora FC" className="w-full h-auto rounded-xl mb-4" />
                            <div className="flex text-md text-gray-500 mt-4 space-x-4">
                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={like} alt="Curtir" className="" />
                                    <span className=''>Gostei</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={compartilhar} alt="Compartilhar" className="" />
                                    <span>Compartilhar</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={comentarios} alt="Comentários" className="" />
                                    <span>Comentários</span>
                                </button>

                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="....." alt="Passa a Bola" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold">Passa a Bola</h3>
                                    <p className="text-md text-gray-500">30 minutos atrás</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                “O futebol feminino não precisa de permissão pra existir” — Aira Bonfim no #PABCAST <br></br>Um trecho poderoso da conversa com Aira Bonfim, falando sobre memória, esporte e resistência no futebol de mulheres.<br></br><br></br>🔥 Imperdível para quem acompanha o projeto e acredita na transformação pelo esporte.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={video1} alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
                                <img src={video2} alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
                            </div>
                            <div className="flex text-md text-gray-500 mt-4 space-x-4">
                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={like} alt="Curtir" className="" />
                                    <span className=''>Gostei</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={compartilhar} alt="Compartilhar" className="" />
                                    <span>Compartilhar</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={comentarios} alt="Comentários" className="" />
                                    <span>Comentários</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
