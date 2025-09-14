import React from 'react'
import { Header1 } from '../components/Header1'
import { useNavigate } from 'react-router-dom'
import { Header3 } from '../components/Header3'
import logo from '../assets/logos/LogoPassaabola.svg'
export const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-background">
          <img 
        src={logo} 
        alt="Logo Fundo" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 w-3/7 h-auto pointer-events-none"
      />
      
      <Header3/>
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-4">
        <p >404</p>
        <h2 className="text-5xl text-primary font-bold">Página Não Encontrada</h2>
        <p className="text-gray-600 max-w-md">
          A página acessada não existe ou foi movida para outro local.
        </p>
        <button onClick={() => navigate('/')}
         className="mt-4 px-6 py-2 rounded-xl bg-primary text-white font-semibold ">
          Ir para Início
        </button>
      </div>
    </div>
  )
}
