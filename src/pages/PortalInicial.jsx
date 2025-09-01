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
    </div>
  )
}
