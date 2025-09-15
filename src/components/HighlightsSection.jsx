// src/components/HighlightsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import podcastImage from '../assets/PassaBola/ChegaMais.png'; // Substitua pela imagem

export const HighlightsSection = () => {
  return (
    <section id="destaques" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Destaques</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          className="rounded-lg shadow-xl"
        >
          <SwiperSlide>
            <div className="relative flex items-end p-8 h-96 bg-cover bg-center text-white" style={{backgroundImage: `url(${podcastImage})`}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold">Conheça o Nosso Podcast - Chega Mais</h3>
                <Link to="/podcast" className="mt-2 inline-block font-semibold hover:underline">Saiba Mais</Link>
              </div>
            </div>
          </SwiperSlide>
          {/* Adicione mais <SwiperSlide> aqui para mais destaques */}
        </Swiper>
      </div>
    </section>
  );
};