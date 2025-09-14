import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCadastro } from './ui/ButtonCadastro'
import logo from '../assets/logos/LogoPassaabola.svg'

export const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cadastro')
  }

  return (
    <header className="flex justify-between items-center p-3 sm:p-4 md:p-6 bg-secondary-2">
      <div className="flex items-center gap-6 md:gap-20 text-amber-50 font-bold">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" 
        />

        <nav className="hidden md:block">
          <ul className="flex gap-6 md:gap-12 lg:gap-20">
            <li><button onClick={() => navigate("/noticias")}>Notícias</button></li>
            <li><button onClick={() => navigate("/loja")}>Loja</button></li>
            <li><button onClick={() => navigate("/conexões")}>Conexões</button></li>
            <li><button onClick={() => navigate("/sobre")}>Sobre</button></li>
          </ul>
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary-2 text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <button onClick={() => navigate("/noticias")}>Notícias</button>
          <button onClick={() => navigate("/loja")}>Loja</button>
          <button onClick={() => navigate("/conexões")}>Conexões</button>
          <button onClick={() => navigate("/sobre")}>Sobre</button>
        </div>
      )}
    </header>
  )
}
