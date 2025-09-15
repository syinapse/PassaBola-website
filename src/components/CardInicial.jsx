import React from 'react';

// O componente recebe as props: imagem, título e data
export const NewsCard = ({ imageSrc, title, date }) => {
  return (
    // Container principal do card com posicionamento relativo
    <div
      className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradiente para garantir a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>

      {/* Container para o texto, posicionado na parte inferior */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
        <h3 className="text-2xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-sm mt-2 opacity-90">
          {date}
        </p>
      </div>
    </div>
  );
};