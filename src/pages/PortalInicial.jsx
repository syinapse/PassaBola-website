import React from 'react'
import { Header1 } from '../components/Header1'
import { Footer } from '../components/Footer'
import { FilterSidebar } from '../components/FilterSidebar'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import bannerImage from '../assets/PaginaPrincipal/Banner.jpg';
import logoCamp1 from '../assets/PaginaPrincipal/Ellipse1.png'
import logoCamp2 from '../assets/PaginaPrincipal/Ellipse2.png'
import logoCamp3 from '../assets/PaginaPrincipal/Ellipse3.png'
import logoCamp4 from '../assets/PaginaPrincipal/Ellipse4.png'
import logoCamp5 from '../assets/PaginaPrincipal/Ellipse5.png'

import slide1 from '../assets/PassaBola/Fiap.jpeg'
import slide2 from '../assets/PassaBola/CopaBola.png'
import slide3 from '../assets/PassaBola/LojaBanner.png'
import NoticiasAPI from '../api/NoticiasComponent '

export const PortalInicial = () => {
  const slides = [
    { 
      image: slide1, 
      title: 'Acesse o nosso canal', 
      type: 'video'
    },
    { 
      image: slide2, 
      title: 'Copa Passa\na Bola', 
      type: 'link',
      buttonText: 'Se Inscreva',
      linkTo: '/inscricao-copa-passa-a-bola'
    },
    { 
      image: slide3, 
      title: 'Conheça a Loja\nPassa a Bola', 
      type: 'link',
      buttonText: 'Conheça Já!',
      linkTo: '/loja'
    },
  ];

  return (
    <>
      <Header1 />

      <main>
        <section 
          className='relative flex flex-col justify-center items-start px-10 md:px-20 lg:px-40'
          style={{ 
            backgroundImage: `url(${bannerImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', 
          }}
        >
  
          <div className="absolute inset-0 bg-black opacity-50"></div> 
          
          <div className="relative z-10">
            <h2 className='text-7xl text-white leading-tight mb-8 font-quando'>
              Brasil luta, mas é <br />
              derrotado na final <br />
              contra os EUA      
            </h2>
            <Link 
              to="../saibamais" 
              className='inline-block border-purple-500 bg-transparent border-2 rounded-full px-12 py-3 text-purple-500 font-semibold text-xl transition-all duration-300 hover:bg-purple-500 hover:text-white'
            >
              Saiba Mais
            </Link>
          </div>
        </section>

        <section className='bg-[#F4F4F4] flex items-center flex-col gap-2 py-16'>
          <h2 className='font-medium text-2xl text-gray-800'>Campeonatos</h2>
          <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 py-10 px-4'>
            <img src={logoCamp1} alt="Logo Campeonato 1" className="h-20 w-auto object-contain" />
            <img src={logoCamp2} alt="Logo Campeonato 2" className="h-20 w-auto object-contain" />
            <img src={logoCamp3} alt="Logo Campeonato 3" className="h-20 w-auto object-contain" />
            <img src={logoCamp4} alt="Logo Campeonato 4" className="h-20 w-auto object-contain" />
            <img src={logoCamp5} alt="Logo Campeonato 5" className="h-20 w-auto object-contain" />
          </div>
        </section>

        <div className='bg-[#F4F4F4] grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 lg:p-16'>
          
          <aside className="col-span-1 lg:col-span-3">
            <FilterSidebar />
          </aside>
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
         
            <NoticiasAPI />
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}