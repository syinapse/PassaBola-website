import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import Frame13 from "../assets/Frame13.png";
import Frame14 from "../assets/Frame14.png";
import camila from "../assets/camila.png";
import manchete from "../assets/manchete.png";
import profile from "../assets/profile.png";
import emoji from "../assets/emoji.png";
import player from "../assets/Player.png";




export const Noticias = () => {
  return (
    <div className='bg-background'>
      <Header1 />
      <section
        className="bg-cover bg-center text-white flex flex-col items-center justify-center py-40 px-4"
        style={{ backgroundImage: `url(${manchete})` }}
      >
        <div className="flex flex-col items-center space-y-4">
          <button className="flex items-center justify-center rounded-full  transition-transform transform hover:scale-110">
            <img
              src={player} 
              alt="Play"
              className="w-20 h-20" 
            />
          </button>
          <p className="font-bold text-lg">Assista a Matéria</p>
        </div>
      </section>



      <div className="bg-background rounded-2xl shadow-lg p-6 w-80 h-40 mx-auto mt-8 flex flex-col items-center justify-center font-sans">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center">
            <img
              src={Frame13}
              alt="Brazil Flag"
            />
            <p className="text-sm font-bold"></p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-5xl font-bold text-gray-800">
            <span>0</span>
            <span>x</span>
            <span>1</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Frame14}
              alt="USA Flag"
            />
          </div>
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-700 mt-4 text-center">Encerrado</p>

      <div className="font-sans min-h-screen py-10 px-4">
        <div className="max-w-3xl mx-auto bg-background p-6 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-left">
              Brasil luta, mas é <br className="hidden md:inline" />
              derrotado na final contra <br className="hidden md:inline" />
              os EUA
            </h1>
            <p className="text-lg text-gray-600 mt-5 leading-relaxed text-left">
              A Seleção Brasileira Feminina se despediu das Olimpíadas após ser derrotada pelos Estados Unidos em uma partida equilibrada, marcada por forte marcação e poucas chances claras. Apesar da garra, o Brasil não conseguiu furar a defesa americana e deu adeus à competição.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 mt-8 mb-12">
            <div class="flex items-center mb-2 sm:mb-0 space-x-2">
              <img
                src={camila}
                alt="Foto do autor"
                class="w-10 h-10 rounded-full object-cover"
              />
              <p class="font-medium">Escrito por <span class="text-gray-800">Camila Duarte</span></p>
            </div>
            <p class="text-right">
              Publicado em <br /> 11/08/24 - 14:35
            </p>
          </div>
          <hr className="my-12 border-t-2 border-gray-300" />


          <div className="text-lg leading-relaxed text-gray-700 font-serif">
            <p className="mb-6">
              <span className="text-7xl leading-none -mt-3 mr-2 font-light text-gray-900">E</span>m uma partida marcada pela tensão e pela intensidade, a Seleção Brasileira Feminina foi superada pelos Estados Unidos e deu adeus ao sonho olímpico. O confronto, válido pelas fases eliminatórias, foi decidido nos detalhes — aqueles que costumam pesar quando a experiência, o histórico e a frieza se impõem. O Brasil lutou até o último minuto, mas não conseguiu traduzir sua entrega em gols, sendo eliminado da competição sem alcançar o pódio. A derrota, não apenas pelo resultado, mas pelo simbolismo de mais uma geração talentosa que sai sem a consagração internacional que tanto merece.
            </p>

            <p className="mb-6">
              A campanha brasileira foi marcada por altos e baixos, mas também por momentos de brilho que mostraram o potencial e a evolução do futebol feminino no país. Desde a estreia, a equipe demonstrou união, resiliência tática e fome de vencer. Os primeiros jogos trouxeram vitórias convincentes e esperança. Jogadoras como Marta, em sua possível despedida olímpica, Ary Borges com sua energia incansável, e a segurança defensiva de Tainara e Rafaelle, personificaram uma equipe que não se entregou. Mas o caminho das mulheres no esporte nunca é apenas sobre tática: é também sobre resistência, visibilidade e afirmação. A eliminação não apaga a trajetória, apenas reforça a urgência de investimentos mais sólidos e reconhecimento contínuo.
            </p>

            <p>
              Mais do que uma eliminação, o que vimos foi um capítulo a mais na luta histórica das mulheres por espaço, voz e justiça no futebol. O Brasil pode ter deixado o torneio sem medalha, mas sai com legado, inspiração e uma mensagem clara: há um país inteiro que começa, enfim, a olhar com mais respeito para elas. O que falta não é talento — esse sobra. Falta estrutura, apoio e confiança. O adeus às Olimpíadas de 2024 é, acima de tudo, um novo começo para quem insiste, resiste e segue jogando — dentro e fora de campo.
            </p>
          </div>

          <hr className="my-12 border-t-2 border-gray-300" />

          <div className="flex items-center text-xl font-bold text-gray-800">
            <span className="mr-2 text-2xl"></span>
            <h2>Mais sobre futebol</h2>
          </div>
          <br /><br />
          <div className="flex flex-col items-center justify-center p-4">
            <div className="rounded-xl overflow-hidden h-40 shadow-md mb-8 max-w-md w-full">
              <img
                src={news1}
                alt="Corinthians feminino"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden h-40 shadow-md mb-8 max-w-md w-full">
              <img
                src={news2}
                alt="Brasil x EUA"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden h-40 shadow-md mb-8 max-w-md w-full">
              <img
                src={news3}
                alt="Arthur Elias e Marta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr className="my-12 border-t-2 border-gray-300" />

          <div className="mt-12">
            <div className="flex items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Conversas Bate-bola</h3>
            </div>

            <div className="flex flex-col items-end space-y-4">
              <div className="flex items-center w-full space-x-4">
                <div className="w-10 h-10">
                  <img
                    src={profile}
                    alt="Foto do autor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Digite seu comentário..."
                    className="w-full pl-4 py-3 rounded-md bg-background border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl w-6 h-6 cursor-pointer"><img
                    src={emoji}
                    alt="Foto do autor"
                    className="w-full h-full object-cover"
                  /></span>
                </div>
              </div>

              <button className="bg-purple-700 rounded-md text-white font-bold px-5 py-2 hover:bg-purple-700 transition-colors duration-200 cursor-pointer">
                Entre para Publicar
              </button>
            </div>

            <p className="text-center text-black italic mt-20 mb-12 text-3xl underline">
              A notícia ainda não há comentários
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};