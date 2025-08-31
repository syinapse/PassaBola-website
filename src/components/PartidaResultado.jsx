import React from 'react';

const PartidaResultado = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      {/* card principal do resultado */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between">
          {/* time Brasil */}
          <div className="flex flex-col items-center space-y-2">
            {/* logo Brasil - imagem oficial */}
            <img 
  src="/brazil-national-football-team-logo-0.png"
  alt="Brasil"
  className="w-[82px] h-[82px] object-contain"
/>
            <span className="text-sm font-medium text-gray-700">BRA</span>
          </div>
          
          {/* placar */}
          <div className="flex items-center space-x-4">
           <span className="text-5xl font-bold text-gray-900">0</span>
           <span className="text-gray-400 font-bold text-2xl">x</span>
           <span className="text-5xl font-bold text-gray-900">1</span>
          </div>
          
          {/* time EUA */}
          <div className="flex flex-col items-center space-y-2">
            {/* logo EUA - imagem oficial */}
            <img 
              src="/selecao-de-futebol-dos-estados-unidos-4096.png"
              alt="Estados Unidos"
             className="w-14 h-14 object-contain"
            />
            <span className="text-sm font-medium text-gray-700">USA</span>
          </div>
        </div>
      </div>
      
      {/* status do jogo */}
      <div className="mt-3">
        <span className="text-gray-700 font-medium text-xl">
  Encerrado
</span>
      </div>
    </div>
  );
};

export default PartidaResultado;