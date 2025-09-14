import React from 'react'
import { Header1 } from '../components/Header1'

export const Loja = () => {
  return (
    <div>
        <Header1/>
<section className="bg-gray-700 flex flex-col gap-1 justify-center items-center text-center py-20">
    <h2 className='text-4xl text-white'>3 CAMISETAS PASSE A BOLA</h2>
    <p className='text-3xl text-primary-2'>POR R$299,90</p>
</section>
<div className="flex flex-col items-center justify-center py-12 bg-background">

  <h2 className="text-3xl mb-8">Mais Vendidos</h2>


  <section className="w-full max-w-6xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl shadow-xl shadow-gray-400/50 p-4 flex flex-col items-center">
<h2>PRODUTAOOO</h2>
  <div className="w-full border-t border-gray-400 my-3"></div>
  <p className=" font-medium text-md">Camiseta 1 Flamengo Fem</p>
  <p className="text-primary font-bold text-lg">R$ 399,99</p>
</div>


    </div>


    <div className="flex justify-center mt-8">
      <button className=" text-primary border-primary border-2 px-6 py-2 rounded-lg font-semibold text-lg shadow">
        Ver tudo
      </button>
    </div>
  </section>
</div>

    </div>
  )
}
