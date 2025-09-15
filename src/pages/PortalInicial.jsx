import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import { NewsCard } from '../components/NewsCard.jsx';

// Importe seus logos e o banner
import logoCamp1 from '../assets/PaginaPrincipal/Ellipse1.png';
import logoCamp2 from '../assets/PaginaPrincipal/Ellipse2.png';
import logoCamp3 from '../assets/PaginaPrincipal/Ellipse3.png';
import logoCamp4 from '../assets/PaginaPrincipal/Ellipse4.png';
import logoCamp5 from '../assets/PaginaPrincipal/Ellipse5.png';
import bannerImage from '../assets/PaginaPrincipal/Banner.jpg'; 

// Imagens cards
import newsImage1 from '../assets/PaginaPrincipal/corinthias.png'; 
import newsImage2 from '../assets/PaginaPrincipal/cruzeiro.png';
import newsImage3 from '../assets/PaginaPrincipal/marta.png';



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
          <h2 className='text-7xl text-white leading-tight mb-8 font-quando'> {/* Usando 'font-quando' aqui */}
            Brasil luta, mas é <br />
            derrotado na final <br />
            contra os EUA
          </h2>
          {/* BOTÃO CORRIGIDO AQUI */}
          <button className='border-purple-500 border-3 rounded-full px-17 py-3 text-purple-500 font-semibold text-2xl transition-opacity duration-300 hover:opacity-80'>
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
      <div className='bg-[#F4F4F4] grid grid-cols-1 lg:grid-cols-4 gap-8 p-10 lg:p-16'>
        
        {/* Coluna da Sidebar de Filtros (continua na esquerda) */}
        <aside className="col-span-1">
          <p>Filtros legais</p> 
        </aside>

        {/* Coluna dos Cards de Notícias (agora começando na 3ª coluna) */}
        <div className="col-span-1 lg:col-span-2 lg:col-start-3 flex flex-col gap-8">
          <NewsCard 
            imageSrc={newsImage1}
            title="Cruzeiro feminino ainda não sabe quando vai jogar em 2025"
            date="11/01/2025"
          />
          <NewsCard 
            imageSrc={newsImage2}
            title="Corinthians feminino é campeão mundial em 2025"
            date="09/06/2025"
          />
          <NewsCard 
            imageSrc={newsImage3}
            title="Ao lado de Marta, mato-grossense Ana Vitória é convocada pela Seleção para a Copa América"
            date="11/01/2025"
          />
        </div>

      </div>

      <Footer />
    </>
  );
};