import React from 'react'
import { Header1 } from '../components/Header1'
import { Header2 } from '../components/Header2'
import { useNavigate } from 'react-router-dom'

export const CadatroNova = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header2/>
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-6 px-4">
        <h2 className="text-4xl font-bold">LOGO</h2>
        <h2 className="text-4xl font-bold">
          Cadastro no <span className="text-text-accent">PASSA A BOLA</span>
        </h2>
        <p className="max-w-md text-gray-400">
          Para começar, selecione se você quer se cadastrar como clube organizador
          ou como usuário/jogadora da comunidade.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4">
            <button className="px-12 py-2 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition">
              Clubes
            </button>
            <button className="px-12 py-3 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition">
              Usuário
            </button>
          </div>
          <p className="text-gray-700 italic font-bold">
            Já possui uma conta?{' '}
            <span className="text-primary-2  font-semibold cursor-pointer ">
             <button onClick={() => navigate('/login')}
             className='underline'>Acesse o Login</button> 
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
