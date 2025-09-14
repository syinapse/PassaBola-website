import React from 'react'
import logo from '../assets/logos/LogoPassaabola.svg'

export const Footer = () => {
  return (
    <footer className='bg-background-3 text-white'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-10 gap-6'>


        <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-6 items-center md:items-start justify-center md:justify-between'>
          <img src={logo} alt="Logo" className="w-36 h-30 object-contain" />
          <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
            <h2>Redes Socias</h2>
            <nav>
              <p>@passaabola</p>
              <p>@passaabola</p>
              <p>@passaabola</p>
            </nav>
          </div>

          <address className='flex flex-col items-center md:items-start'>
            <p>Contato</p>
            <p>contato@passaabola.com.br</p>
            <button>FALE CONOSCO</button>
          </address>

        </div>
      </div>


<p className='text-sm p-10 relative'>
  <span className="block border-t border-gray-500 w-full md:hidden mb-2"></span>
  © Copyright 2025. PassaaBola. Todos os direitos reservados
</p>
    </footer>
  )
}
