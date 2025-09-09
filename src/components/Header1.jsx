import React from 'react'
import { ButtonCadastro } from './ui/ButtonCadastro'
import { useNavigate } from 'react-router-dom'

export const Header1 = () => {
  const handleClick = () => {
    alert('Botão clicado!')
    navigate('/cadastro')
  }
const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center p-4 bg-black">

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


      <div className="flex items-center gap-2 text-white">
        <span>O</span>
        <ButtonCadastro onClick={handleClick} />
      </div>
    </header>
  )
}
