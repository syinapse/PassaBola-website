import React from 'react'
import { Header1 } from '../components/Header1'

export const PortalInicial = () => {

  return (
    <div>
   <Header1/>
   <section className=' bg-amber-400 flex flex-col items-start gap-6 p-10'>
    <h2 className='text-4xl  '>Brasil luta, mas é <br/> derrotado na final <br/> contra os EUA</h2>
    <button className='border-primary-2 border-2 rounded-full px-8 py-1 text-primary-2 font-bold'>Saiba Mais</button>
      <p className='self-center text-primary-2'>o</p>
   </section>
   <section className='bg-background flex items-center flex-col gap-2'>
    <h2 className='mt-6 font-medium text-2xl text-text '>Campeonatos</h2>
    <div className='flex gap-10 py-10'>
      <span>A</span>
      <span>A</span>
      <span>A</span>
      <span>A</span>
      <span>A</span>
    </div>
   </section>
   <section className='flex bg-background justify-between p-10 gap-6 h-screen'>
    <section>
      filtros legais
    </section>
    <section className='flex flex-col justify-around'>
<div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
  <h3 className="text-xl font-bold mb-2">
    Título do Card
  </h3>
  <p className="text-gray-700 text-center mb-4">
      AAAAAAAAAAAAAAAAAAAA
  </p>

</div>
<div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
  <h3 className="text-xl font-bold mb-2">
    Título do Card
  </h3>
  <p className="text-gray-700 text-center mb-4">
    AAAAAAAAAAAAAAAAAAAA
  </p>

</div>
<div className="bg-white rounded-xl shadow-lg p-6 w-80 h-64 flex flex-col items-center justify-center">
  <h3 className="text-xl font-bold mb-2">
    Título do Card
  </h3>
  <p className="text-gray-700 text-center mb-4">
     AAAAAAAAAAAAAAAAAAAA
  </p>

</div>

    </section>
   </section>
    </div>
  )
}
