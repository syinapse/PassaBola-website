import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCadastro } from './ui/ButtonCadastro'

export const Header2 = () => {
  const handleClick = () => {
    navigate('/cadastro')
  }
const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center p-6 bg-secondary-2">

      <div className="flex items-center gap-20   text-amber-50 font-bold">
        <h1 className="text-xl font-bold  ">LOGO</h1>
        <nav>
          <ul className="flex gap-20  ">
            <li><button onClick={() => navigate("/noticias")}>Notícas</button></li>
            <li><button onClick={() => navigate("/loja")}>Loja</button></li>
            <li><button onClick={() => navigate("/conexões")}>Conexões</button></li>
            <li><button onClick={() => navigate("/sobre")}>Sobre</button></li>
          </ul>
        </nav>
      </div>



    </header>
  )
}
