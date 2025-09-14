import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';

// Importe seus logos e o banner
import logoCamp1 from '../assets/PaginaPrincipal/Ellipse1.png';
import logoCamp2 from '../assets/PaginaPrincipal/Ellipse2.png';
import logoCamp3 from '../assets/PaginaPrincipal/Ellipse3.png';
import logoCamp4 from '../assets/PaginaPrincipal/Ellipse4.png';
import logoCamp5 from '../assets/PaginaPrincipal/Ellipse5.png';
import bannerImage from '../assets/PaginaPrincipal/Banner.jpg'; 

export const PortalInicial = () => {
  return (
    <>
      <Header1 />

      {/* ===== SEÇÃO DO BANNER PRINCIPAL ===== */}
      <section 
        className='relative flex flex-col justify-center items-start px-10 md:px-20 lg:px-40'
        style={{ 
          backgroundImage: `url(${bannerImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        
        {/* Container para o conteúdo do banner */}
        <div className="relative z-10">
          <h2 className='text-6xl text-white leading-tight mb-8 font-quando'> {/* Usando 'font-quando' aqui */}
            Brasil luta, mas é <br />
            derrotado na final <br />
            contra os EUA
          </h2>
          {/* BOTÃO CORRIGIDO AQUI */}
          <button className='border-purple-500 border-2 rounded-full px-12 py-3 text-purple-500 font-semibold text-lg transition-opacity duration-300 hover:opacity-80'>
            Saiba Mais
          </button>
        </div>
      </section>

      {/* ===== SEÇÃO CAMPEONATOS ===== */}
      <section className='bg-background flex items-center flex-col gap-2 py-16'>
        <h2 className='font-medium text-2xl text-text'>Campeonatos</h2>
        <div className='flex flex-wrap justify-center gap-10 py-10'>
          <img src={logoCamp1} alt="Logo Campeonato 1" className="h-24 w-24 object-contain" />
          <img src={logoCamp2} alt="Logo Campeonato 2" className="h-24 w-24 object-contain" />
          <img src={logoCamp3} alt="Logo Campeonato 3" className="h-24 w-24 object-contain" />
          <img src={logoCamp4} alt="Logo Campeonato 4" className="h-24 w-24 object-contain" />
          <img src={logoCamp5} alt="Logo Campeonato 5" className="h-24 w-24 object-contain" />
        </div>
      </section>

      {/* ===== SEÇÃO FILTROS E CARDS ===== */}
      <div className='flex bg-background justify-between p-10 gap-6 min-h-screen'>
        <aside>
          <p>Filtros legais</p>
        </aside>
        <div className='flex flex-col justify-around'>
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">Título do Card 1</h3>
            <p className="text-gray-700 text-center mb-4">Descrição do primeiro card.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">Título do Card 2</h3>
            <p className="text-gray-700 text-center mb-4">Descrição do segundo card.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">Título do Card 3</h3>
            <p className="text-gray-700 text-center mb-4">Descrição do terceiro card.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};