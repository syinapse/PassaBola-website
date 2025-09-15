import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Navigation já está importado, ótimo!
import 'swiper/css';
import 'swiper/css/navigation';

// Ícones para as setas customizadas
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import podcastImage1 from '../assets/PassaBola/ChegaMais.png'; 
import podcastImage2 from '../assets/PassaBola/FalaBebe.png'; 
import podcastImage3 from '../assets/PassaBola/SpecialProgram.png'; 



export const HighlightsSection = () => {
  return (
    <section id="destaques" className="py-20 bg-gray-50"> {/* Fundo cinza claro */}
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 font-quando">Destaques</h2>
        
        {/* Adicionei 'relative group' para as setas aparecerem no hover (opcional) */}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30} // Adicionado um espaço entre slides
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            className="rounded-[20px] shadow-xl" // Borda arredondada maior
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative flex items-end p-8 h-[500px] bg-cover bg-center text-white" style={{backgroundImage: `url(${podcastImage1})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold font-quando">Conheça o Nosso Podcast - Chega Mais</h3>
                  <p className="mt-2 text-base font-semibold">Saiba Mais</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 (Exemplo) */}
            <SwiperSlide>
              <div className="relative flex items-end p-8 h-[500px] bg-cover bg-center text-white" style={{backgroundImage: `url(${podcastImage2})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold font-quando">Podcast, FALA, BEBÊ</h3>
                  <p className="mt-2 text-base font-semibold">Saiba Mais</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex items-end p-8 h-[500px] bg-cover bg-center text-white" style={{backgroundImage: `url(${podcastImage3})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold font-quando">Programas Especiais</h3>
                  <p className="mt-2 text-base font-semibold">Saiba Mais</p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>

          {/* Botões de Navegação Customizados */}
          <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <ChevronLeftIcon />
          </div>
          <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </section>
  );
};