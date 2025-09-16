import React, { useState } from 'react';
import { FaHeart, FaShareAlt, FaComment, FaTrophy, FaFutbol, FaRegClock } from 'react-icons/fa';
import { MdOutlineLocationOn, MdPhoto, MdVideocam, MdInsertEmoticon, MdClose } from 'react-icons/md';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import logo from "../assets/noticias/logo.png";
import peneira from "../assets/noticias/peneira.png";
import fundo from "../assets/noticias/fundo.png";
import luana from "../assets/noticias/luana.png";
import video1 from "../assets/noticias/video1.png";
import emoji from "../assets/noticias/emoji.png";
import correndo from "../assets/icons/correndo.png";
import trofeu from "../assets/icons/trofeu.png";
import campo from "../assets/icons/campo.png";


import video2 from "../assets/noticias/video2.png";
import like from '../assets/icons/like.png';
import comentarios from '../assets/icons/cometarios.png';
import compartilhar from '../assets/icons/compartilhar.png';
import feliz from '../assets/icons/feliz.png';
import imagem from '../assets/icons/imagem.png';
import video from '../assets/icons/video.png';
import gif from '../assets/icons/gif.png';
import canal from '../assets/noticias/canal.png';



export const SessaoClubes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenCommentsModal = () => {
        setIsCommentsModalOpen(true);
    };

    const handleCloseCommentsModal = () => {
        setIsCommentsModalOpen(false);
    };

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
                                <h2 className="text-xl font-bold">Aurora FC</h2>
                                <p className="text-md text-gray-500">
                                    SUB-14 até SUB-20<span className="font-bold"></span>
                                </p>
                                <p className="text-gray-600 text-md mt-4 px-6 leading-relaxed text-left">
Com base em São Paulo, o Aurora FC é um projeto dedicado à descoberta, formação e valorização de jogadoras de base. Acreditamos que o futebol é uma ferramenta... LEIA MAIS                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 ">
                                    <img 
                                    className='text-xl'
                                    src={campo}
                                    />
                                    <span>
                                        <strong className="text-primary text-md">19</strong> Peneiras Organizadas
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img 
                                    className='text-xl'
                                    src={trofeu}
                                    />
                                    <span>
                                        <strong className="text-primary text-md">03</strong> Titulos Conquistados
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img 
                                    className='text-xl'
                                    src={correndo}
                                    />
                                    <span>
                                        <strong className="text-primary text-md">60</strong> Jogadoras de Base
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 w-full md:w-2/5">
                        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
                            <div className="w-full flex items-center justify-between pb-4 mb-4 cursor-pointer" onClick={handleOpenModal}>
                                <input
                                    type="text"
                                    placeholder="Faça sua publicação"
                                    className="flex-grow bg-gray-100 rounded-2xl border-gray-200 border px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-md cursor-pointer"
                                    readOnly
                                />
                            </div>
                            <div className="w-full flex justify-end space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img src={video} alt="" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img src={imagem} alt="" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img src={gif} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={logo} alt="Aurora FC" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold">Aurora FC</h3>
                                    <p className="text-md text-gray-500">15 minutos atrás</p>
                                </div>
                            </div>
                            <p className="mb-4">
                                🎯 Vem aí mais uma chance de mostrar seu talento!A equipe Meninas da Aurora FC está promovendo uma peneira para jogadoras de 14 a 18 anos em São Paulo. As vagas são limitadas, e a oportunidade é incrível!
                            </p>
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
                            <div className="flex text-md text-text mt-4 space-x-4">
                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={like} alt="Curtir" className="" />
                                    <span className=''>Gostei</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={compartilhar} alt="Compartilhar" className="" />
                                    <span>Compartilhar</span>
                                </button>

                                {/* Botão de Comentários */}
                                <button className="flex items-center space-x-1 cursor-pointer" onClick={handleOpenCommentsModal}>
                                    <img src={comentarios} alt="Comentários" className="" />
                                    <span>Comentários</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <img src={canal} alt="Passa a Bola" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold">Passa a Bola</h3>
                                    <p className="text-md text-gray-500">30 minutos atrás</p>
                                </div>
                            </div>
                            <p className="mb-4">
                                “O futebol feminino não precisa de permissão pra existir” — Aira Bonfim no #PABCAST <br></br>Um trecho poderoso da conversa com Aira Bonfim, falando sobre memória, esporte e resistência no futebol de mulheres.<br></br><br></br>🔥 Imperdível para quem acompanha o projeto e acredita na transformação pelo esporte.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={video1} alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
                                <img src={video2} alt="Aira Bonfim" className="w-full h-auto rounded-xl" />
                            </div>
                            <div className="flex text-md text-text mt-4 space-x-4">
                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={like} alt="Curtir" className="" />
                                    <span className=''>Gostei</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer">
                                    <img src={compartilhar} alt="Compartilhar" className="" />
                                    <span>Compartilhar</span>
                                </button>

                                <button className="flex items-center space-x-1 cursor-pointer" onClick={handleOpenCommentsModal}>
                                    <img src={comentarios} alt="Comentários" className="" />
                                    <span>Comentários</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <div className="flex items-center space-x-2">
                                <img src={logo} alt="Aurora FC" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="font-bold text-sm">Aurora FC</p>
                                    <p className="text-xs text-gray-500">Publicar para todos</p>
                                </div>
                            </div>
                            <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <MdClose className="text-xl" />
                            </button>
                        </div>
                        <div className="p-4">
                            <textarea
                                placeholder="Escreva algo para começar..."
                                className="w-full h-40 resize-none outline-none border-none text-gray-800"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img
                                        src={feliz}
                                        alt="Foto"
                                        className="w-6 h-6"
                                    />
                                </button>

                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img
                                        src={imagem}
                                        alt="Emoji"
                                        className="w-6 h-6"
                                    />
                                </button>

                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img
                                        src={video}
                                        alt="Vídeo"
                                    />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <img
                                        src={gif}
                                        alt="Vídeo"
                                    />
                                </button>
                            </div>
                            <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors">
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isCommentsModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center">
                                <h3 className="text-xl font-bold">Comentários</h3>
                                <span className="ml-2 bg-gray-200 text-gray-700 font-bold text-xs px-2 py-1 rounded-full">0</span>
                            </div>
                            <button onClick={handleCloseCommentsModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <MdClose className="text-xl" />
                            </button>
                        </div>
                        <div className="p-4 flex items-center space-x-4 ">
                            <img src={logo} alt="Aurora FC" className="w-10 h-10 rounded-full" />
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    placeholder="Escreva o seu comentário..."
                                    className="w-full bg-gray-100 rounded-md px-4 py-4 border pr-10 text-gray-800 focus:outline-none"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                                    <img src={emoji} className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center text-gray-500 text-text">
                            <p className="italic underline">Não há comentários na publicação...</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};