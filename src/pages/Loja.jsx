import React from 'react'
import { Header1 } from '../components/Header1'
import { CardProduto } from '../components/CardProduto'
import { Footer } from '../components/Footer'
import camisetaFlamengo from '../assets/products/camistaFlamengo.png'
import camisetaArsenal from '../assets/products/Camiseta3ArsenalFem.png'
import camisetaCruzeiro from '../assets/products/camisetaCruzeiro.png'
import camisetaPassaABola from '../assets/products/camisetaPassaABola.png'
import camisa3passaabola from '../assets/products/3camisapassaabola.png'
import jaquetafeminina from '../assets/products/jaquetafeminina.png'
import bola from '../assets/products/bola.png'
import camisetatiro from '../assets/products/camisetatiro.png'

import novaColecao from '../assets/cards/novaColecao.svg'
import produtosOriginais from '../assets/cards/produtosoriginais.svg'
import freteGratis from '../assets/cards/freteGratis.svg'

import acessorioCard from '../assets/cards/AceesorioCard.svg'
import camisetaCard from '../assets/cards/camisetaCard.svg'
import jaquetaCard from '../assets/cards/jaquetaCard.svg'


import bannerBola from '../assets/banners/bannerBola.png'

export const Loja = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header1/>
<section className="flex flex-col gap-1 justify-center items-center text-center py-18  bg-cover bg-center bg-no-repeat"
 style={{ backgroundImage: `url(${bannerBola})` }}>
  
    <h2 className='text-4xl text-white font-quando'>3 CAMISETAS PASSE A BOLA</h2>
    <p className='text-3xl text-primary-2 font-quando'>POR R$299,90</p>
</section>
<div className="flex flex-col items-center gap-4 justify-center py-12 bg-background">

  <h2 className="text-4xl font-quando mb-8">Mais Vendidos</h2>



  <section className="w-full max-w-6xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<CardProduto titulo={"Camiseta 1 Flamengo Fem"} img={camisetaFlamengo} preco={'R$ 399,99'}/>
<CardProduto titulo={"Camiseta 3 Arsenal Fem"} preco={"R$ 379,99"} img={camisetaArsenal}/>
<CardProduto titulo={"Camisa Cruzeiro III Fem "} preco={"R$ 349,99"} img={camisetaCruzeiro}/>
<CardProduto titulo={"Camiseta Passa a Bola Fem"} preco={"R$ 79,90"} img={camisetaPassaABola}/>

<CardProduto titulo={"3 Camisetas Passa a Bola Fem"} preco={"R$ 299,90"} img={camisa3passaabola}/>
<CardProduto titulo={"Jaqueta Folgada Classic"} preco={"R$ 399,99"} img={jaquetafeminina}/>
<CardProduto titulo={"Bola UWCL League 24/25"} preco={"R$ 259,99"} img={bola}/>
<CardProduto titulo={"Camiseta Tiro 24"} preco={"R$ 159,99"} img={camisetatiro}/>


    </div>


    <div className="flex justify-center mt-8">
      <button className=" text-primary border-primary border-2 px-6 py-2 rounded-lg font-semibold text-lg shadow">
        Ver tudo
      </button>
    </div>
  </section>
  <section className='flex py-8 w-full justify-around items-center gap-6'>
    <button className='cursor-pointer'><img src={novaColecao} alt="nova colecao" /></button>
    <button className='cursor-pointer'><img src={produtosOriginais} alt="produtos originais" /></button>
    <button className='cursor-pointer'><img src={freteGratis} alt="frete grátis" /></button>


  </section>
  <h2 className='font-quando text-4xl'>Nosso Catálogo</h2>
  <section className='flex justify-around w-full gap-6'>
    <button className='cursor-pointer'><img src={camisetaCard} alt="frete grátis" /></button>
    <button className='cursor-pointer'><img src={jaquetaCard} alt="frete grátis" /></button>
    <button className='cursor-pointer'><img src={acessorioCard} alt="frete grátis" /></button>

  </section>
</div>
<Footer/>
    </div>
  )
}
