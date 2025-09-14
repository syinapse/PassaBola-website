import React from 'react'
import { Header1 } from '../components/Header1'
import { CardProduto } from '../components/CardProduto'
import { Footer } from '../components/Footer'

export const Loja = () => {
  return (
    <div>
        <Header1/>
<section className="bg-gray-700 flex flex-col gap-1 justify-center items-center text-center py-20">
    <h2 className='text-4xl text-white'>3 CAMISETAS PASSE A BOLA</h2>
    <p className='text-3xl text-primary-2'>POR R$299,90</p>
</section>
<div className="flex flex-col items-center gap-4 justify-center py-12 bg-background">

  <h2 className="text-3xl mb-8">Mais Vendidos</h2>


  <section className="w-full max-w-6xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<CardProduto titulo={"Camiseta 1 Flamengo Fem"} preco={'R$ 399,99'}/>
<CardProduto/>
<CardProduto/>
<CardProduto/>
<CardProduto/>
<CardProduto/>
<CardProduto/>
<CardProduto/>

    </div>


    <div className="flex justify-center mt-8">
      <button className=" text-primary border-primary border-2 px-6 py-2 rounded-lg font-semibold text-lg shadow">
        Ver tudo
      </button>
    </div>
  </section>
  <section className='flex w-full justify-around items-center'>
    <h2>CARD</h2>
    <h2>CARD</h2>
    <h2>CARD</h2>
  </section>
</div>
<Footer/>
    </div>
  )
}
