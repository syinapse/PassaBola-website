import React from 'react';
import { Play } from 'lucide-react';
const NoticiasHero = () => {
  return (
    <>
      <section className="relative h-96 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

  <div className="absolute inset-0 bg-black/40"></div>
</div>
      
      {/* conteúdo centralizado - fica acima das overlays */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Flex container vertical para organizar botão e texto */}
        <div className="flex flex-col items-center space-y-4">
          {/* play circular com efeitos hover */}
          <button className="group flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
            {/* icone de play */}
            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
          <span className="text-white text-lg font-medium">
            Assista a Matéria
          </span>
        </div>
      </div>
    </section>
    </>
  );
};

export default NoticiasHero;