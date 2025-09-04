import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import { FaPlay } from 'react-icons/fa';

export const Noticias = () => {
  return (
    // Esta é a div pai única que encapsula todo o conteúdo do componente
    <div>
      <Header1 />
      <section className='bg-blue-500 text-white flex flex-col items-center justify-center py-24 px-4'>
        {/* A classe 'py-22' não é padrão no Tailwind. Usamos 'py-24' como alternativa. */}
        <div className="flex flex-col items-center space-y-4">
          <button className='flex items-center justify-center w-20 h-20 rounded-full bg-white transition-transform transform hover:scale-110'>
            <FaPlay className="text-4xl text-black ml-1" />
          </button>
          <p className='font-bold text-lg'>Assista a Matéria</p>
        </div>
      </section>

      {/* Box de Placar do Jogo */}
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 h-40 mx-auto mt-8 flex flex-col items-center justify-center font-sans">
        {/* Removido o 'justify-between' duplicado */}
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.co/48x48/0055ff/ffffff?text=BRA"
              alt="Brazil Flag"
              className="h-12 w-12 rounded-full mb-1"
            />
            <p className="text-sm font-bold">BRA</p>
          </div>
          <span className="text-5xl font-bold text-gray-800">0 x 1</span>
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.co/48x48/ff0000/ffffff?text=EUA"
              alt="USA Flag"
              className="h-12 w-12 rounded-full mb-1"
            />
            <p className="text-sm font-bold">USA</p>
          </div>
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-700 mt-4 text-center">Encerrado</p>

      <div className="font-sans min-h-screen py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-12 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
              Brasil luta, mas é <br className="hidden md:inline" />
              derrotado na final contra <br className="hidden md:inline" />
              os EUA
            </h1>
            <p className="text-lg text-gray-600 mt-5 leading-relaxed">
              A Seleção Brasileira Feminina se despediu das Olimpíadas após ser derrotada pelos Estados Unidos em uma partida equilibrada, marcada por forte marcação e poucas chances claras. Apesar da garra, o Brasil não conseguiu furar a defesa americana e deu adeus à competição.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 mt-8 mb-12">
            <div className="flex items-center mb-2 sm:mb-0">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <p className="font-medium">Escrito por<span className="text-gray-800">Camila Duarte</span></p>
            </div>
            <p className="text-right">
              Publicado em <br /> 11/08/24 - 14:35
            </p>
          </div>

          <div className="text-lg leading-relaxed text-gray-700 font-serif">
            <p className="mb-6">
              <span className="float-left text-7xl leading-none -mt-3 mr-2 font-light text-gray-900">E</span>m uma partida marcada pela tensão e pela intensidade, a Seleção Brasileira Feminina foi superada pelos Estados Unidos e deu adeus ao sonho olímpico. O confronto, válido pelas fases eliminatórias, foi decidido nos detalhes — aqueles que costumam pesar quando a experiência, o histórico e a frieza se impõem. O Brasil lutou até o último minuto, mas não conseguiu traduzir sua entrega em gols, sendo eliminado da competição sem alcançar o pódio. A derrota, não apenas pelo resultado, mas pelo simbolismo de mais uma geração talentosa que sai sem a consagração internacional que tanto merece.
            </p>

            <p className="mb-6">
              A campanha brasileira foi marcada por altos e baixos, mas também por momentos de brilho que mostraram o potencial e a evolução do futebol feminino no país. Desde a estreia, a equipe demonstrou união, resiliência tática e fome de vencer. Os primeiros jogos trouxeram vitórias convincentes e esperança. Jogadoras como Marta, em sua possível despedida olímpica, Ary Borges com sua energia incansável, e a segurança defensiva de Tainara e Rafaelle, personificaram uma equipe que não se entregou. Mas o caminho das mulheres no esporte nunca é apenas sobre tática: é também sobre resistência, visibilidade e afirmação. A eliminação não apaga a trajetória, apenas reforça a urgência de investimentos mais sólidos e reconhecimento contínuo.
            </p>

            <p>
              Mais do que uma eliminação, o que vimos foi um capítulo a mais na luta histórica das mulheres por espaço, voz e justiça no futebol. O Brasil pode ter deixado o torneio sem medalha, mas sai com legado, inspiração e uma mensagem clara: há um país inteiro que começa, enfim, a olhar com mais respeito para elas. O que falta não é talento — esse sobra. Falta estrutura, apoio e confiança. O adeus às Olimpíadas de 2024 é, acima de tudo, um novo começo para quem insiste, resiste e segue jogando — dentro e fora de campo.
            </p>
          </div>

          <hr className="my-12 border-t border-gray-200" />

          <div className="flex items-center text-xl font-bold text-gray-800">
            <span className="mr-2 text-2xl"></span>
            <h2>Mais sobre futebol</h2>
          </div>
          <br></br>
          <div className="flex flex-col space-y-4">
            <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-white text-lg font-bold text-center leading-snug">Libertadores é do timão! Corinthians feminino levanta a taça</p>
              </div>
            </div>
            <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-white text-lg font-bold text-center leading-snug">Brasil luta, mas é derrotado na final contra os EUA</p>
              </div>
            </div>
            <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-white text-lg font-bold text-center leading-snug">Arthur Elias convoca seleção com presença marcante de Marta</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Conversas Bate-bola</h3>
            </div>

            <div className="flex flex-col items-end space-y-4">
              <div className="flex items-center w-full space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Digite seu comentário..."
                    className="w-full pl-4 pr-10 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer">😀</span>
                </div>
              </div>

              <button className="bg-purple-600 text-white font-bold px-6 py-3 hover:bg-purple-700 transition-colors duration-200">
                Entre para Publicar
              </button>
            </div>
            
            <p className="text-center text-gray-500 italic mt-6 text-2xl underline">
              A notícia ainda não há comentários
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};