import React from 'react';
import PartidaResultado from '../components/PartidaResultado';
import NoticiasHero from '../components/NoticiasHero';

const Noticias = () => {
  return (
    <main>
      <NoticiasHero />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <PartidaResultado />
      </div>
    </main>
  );
};

export default Noticias;
