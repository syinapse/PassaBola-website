import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import logoCamp1 from '../assets/PaginaPrincipal/Ellipse1.png';
import logoCamp2 from '../assets/PaginaPrincipal/Ellipse2.png';
import logoCamp3 from '../assets/PaginaPrincipal/Ellipse3.png';
import logoCamp4 from '../assets/PaginaPrincipal/Ellipse4.png';
import logoCamp5 from '../assets/PaginaPrincipal/Ellipse5.png';


export const PortalInicial = () => {
  return (
    <>
      <Header1 />

      <section className='bg-amber-400 flex flex-col items-start gap-6 pt-40 pb-3 px-10'>
        <h2 className='text-4xl'>
          Brasil luta, mas é <br />
          derrotado na final <br />
          contra os EUA
        </h2>
        <button className='border-primary-2 border-2 rounded-full px-8 py-1 text-primary-2 font-bold'>
          Saiba Mais
        </button>
        {/* Este parágrafo parece ser um placeholder, lembre-se de substituí-lo :) */}
        <p className='self-center text-primary-2 mt-20'>o</p>
      </section>

      <section className='bg-background flex items-center flex-col gap-2'>
        <h2 className='mt-6 font-medium text-2xl text-text'>Campeonatos</h2>
        <div className='flex gap-10 py-10'>
          {/* Placeholders para os cards de campeonato */}
          <img src={logoCamp4} alt="Logo Campeonato1" className="h-24 w-24 object-contain" />
          <img src={logoCamp2} alt="Logo Campeonato2" className="h-24 w-24 object-contain" />
          <img src={logoCamp1} alt="Logo Campeonato3" className="h-24 w-24 object-contain" />
          <img src={logoCamp3} alt="Logo Campeonato4" className="h-24 w-24 object-contain" />
          <img src={logoCamp5} alt="Logo Campeonato5" className="h-24 w-24 object-contain" />
        </div>
      </section>

      {/* Sugestão: A tag <section> geralmente representa uma seção temática do documento e deveria ter um título (h2, h3...).
          Para agrupar elementos por layout, como aqui, uma <div> é mais apropriada. */}
      <div className='flex bg-background justify-between p-10 gap-6 min-h-screen'>
        
        {/* Seção de Filtros */}
        <aside>
          {/* Aqui você pode desenvolver seu componente de filtros */}
          <p>Filtros legais</p>
        </aside>

        {/* Seção dos Cards de Notícias/Eventos */}
        {/* Dica de Ouro: Como os cards se repetem, o ideal é criar um componente para eles! Veja a explicação abaixo. */}
        <div className='flex flex-col justify-around'>
          
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">
              Título do Card 1
            </h3>
            <p className="text-gray-700 text-center mb-4">
              Descrição do primeiro card.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">
              Título do Card 2
            </h3>
            <p className="text-gray-700 text-center mb-4">
              Descrição do segundo card.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">
              Título do Card 3
            </h3>
            <p className="text-gray-700 text-center mb-4">
              Descrição do terceiro card.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};