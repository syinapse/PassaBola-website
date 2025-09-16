import React from 'react';
import sobreImage from '../assets/PassaBola/AboutUs.png'; 

export const AboutSection = () => {
  return (
    // ALTERADO AQUI: de bg-gray-50 para a cor de fundo roxa do seu tema
    <section id="sobre" className="bg-[#F9F0FF] py-20 px-6 font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-gray-800 font-quando">Sobre a gente</h2>
        
        <div className="max-w-5xl mx-auto bg-[#F9F0FF] rounded-2xl shadow-inner p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border-2 border-gray-300">
          
          <img 
            src={sobreImage} 
            alt="O time Passe a Bola" 
            className="w-full md:w-5/12 rounded-lg object-cover flex-shrink-0"
          />
          
          <div className="text-left text-gray-700">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-quando">O que somos</h3>
              <p className="text-base leading-relaxed">O Passe a Bola é um canal no YouTube criado pela NWB (produtora do Desimpedidos) com o objetivo de dar visibilidade ao futebol feminino. Comandado por Alê Xavier e Luana Maluf, o canal busca aproximar o público das jogadoras profissionais e amadoras, promovendo debates, análises e entretenimento sobre a modalidade.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-quando">Missão</h3>
              <p className="text-base leading-relaxed">O Passe a Bola tem como missão fortalecer o protagonismo feminino no esporte, promovendo a inclusão, diversidade e representatividade no futebol. Por meio de suas produções, o canal busca inspirar e empoderar mulheres a se engajarem e se destacarem no universo esportivo.</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-quando">Trajetória</h3>
              <ul className="text-base list-disc list-inside space-y-1">
                  <li>Desde 05/2021 gravando vídeos para internet</li>
                  <li>Parceria com YT para transmissão ao vivo do Campeonato Paulista em 2022</li>
                  <li>+210 Mil Inscritos no yt em apenas 4 anos</li>
                  <li>+82 Milhões de pessoas alcançadas</li>
                  <li>+850 Vídeos postados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};