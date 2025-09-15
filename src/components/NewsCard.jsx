import React from 'react';

export const NewsCard = ({ imageSrc, title, date }) => {
  return (
    <div
      // Adicionada a classe rounded-[20px] para a borda exata de 20px
      className="relative w-full h-80 overflow-hidden group cursor-pointer rounded-[20px]" 
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ... o resto do seu componente continua igual ... */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>

      <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
        <h3 className="text-2xl font-bold leading-tight font-quando"> 
          {title}
        </h3>
        <p className="text-sm mt-2 opacity-90 font-quando">
          {date}
        </p>
      </div>
    </div>
  );
};