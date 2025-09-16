import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../assets/PassaBola/Fiap.jpeg'; 
import slide2 from '../assets/PassaBola/CopaBola.png';
import slide3 from '../assets/PassaBola/LojaBanner.png';

export const HeroSection = () => {
  const slides = [
    { 
      image: slide1, 
      title: 'Acesse o nosso canal', 
      type: 'video'
    },
    { 
      image: slide2, 
      title: 'Copa Passa\na Bola', 
      type: 'inscricao',
      buttonText: 'Se Inscreva',
      linkTo: '/inscricao-copa-passa-a-bola'
    },
    { 
      image: slide3, 
      title: 'Conheça a Loja\nPassa a Bola', 
      type: 'inscricao',
      buttonText: 'Conheça Já!',
      linkTo: '/loja'
    },
  ];

  return (
    <section id="inicio">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className={`relative flex flex-col h-[90vh] bg-black px-10 md:px-20 lg:px-40 
                ${slide.type === 'video' 
                  ? 'justify-center items-center text-center' 
                  : 'justify-center items-start text-left'
                }`
              }
            >
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover opacity-50"/>
              
              <div className="relative z-10">
                <h1 className="text-white text-6xl md:text-8xl leading-tight mb-8 font-bold whitespace-pre-line font-quando"> 
                  {slide.title}
                </h1>

                {/* Renderização condicional dos botões */}
                {slide.type === 'video' && (
                  <button className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}

                {slide.type === 'inscricao' && (
                  <Link 
                    to={slide.linkTo}
                    className='inline-block border-purple-500 bg-transparent border-2 rounded-full px-10 py-3 text-purple-500 font-semibold text-xl transition-all duration-300 hover:bg-purple-500 hover:text-white'
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};