import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-background-3 text-white'>
      <div className='  flex items-center h-55 p-10 '>
        <div className='flex justify-around w-1/2'> 
      <div>LOGO</div>
      <div className='flex flex-col gap-2'>
        <h2>Redes Socias</h2>
        <nav>
      <p>@passaabola</p>
      <p>@passaabola</p>
      <p>@passaabola</p>
        </nav>
      </div>
      <address className='flex flex-col items-center'>
        <p>Contato</p>
        <p>contato@passabola.com.br</p>
        <button>FALE CONOSCO</button>
      </address>
    </div>
   
      </div>
       <p className=' text-sm p-10 '>© Copyright 2025. PassaaBola. Todos os direitos reservados</p>
      </footer>
  )
}
