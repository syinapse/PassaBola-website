import React from 'react'
import { ButtonCadastro } from './ui/ButtonCadastro'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logos/LogoPassaabola.svg'
export const Header1 = () => {
  const handleClick = () => {
    navigate('/cadastro')
  }
const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center p-3 bg-secondary-2">

      <div className="flex items-center gap-20   text-amber-50 font-bold">
     <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />


        <nav>
          <ul className="flex gap-20  ">
            <li><button onClick={() => navigate("/noticias")}>Notícas</button></li>
            <li><button onClick={() => navigate("/loja")}>Loja</button></li>
            <li><button onClick={() => navigate("/conexões")}>Conexões</button></li>
            <li><button onClick={() => navigate("/sobre")}>Sobre</button></li>
          </ul>
        </nav>
      </div>


      <div className="flex items-center gap-2 text-white">
        <span>O</span>
        <ButtonCadastro onClick={handleClick} />
      </div>
    </header>
  )
}
