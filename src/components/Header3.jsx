import React, { useState } from 'react'
import { ButtonCadastro } from './ui/ButtonCadastro'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logos/LogoPassaabola.svg'


export const Header3 = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false) 
  const navigate = useNavigate()

  const handleClick = () => navigate('/cadastro')
  const handleLogin = () => navigate('/')

  return (
    <header className="flex justify-between items-center  sm:p-4 md:p-4 bg-secondary-2 relative">

      <div className="flex items-center gap-6 md:gap-20 text-amber-50 font-bold">
        <button onClick={handleLogin} className='cursor-pointer'>
          <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
        </button>

 
        <nav className="hidden md:block">
          <ul className="flex gap-6 md:gap-12 lg:gap-20">
            <li><button onClick={() => navigate("/noticias")}  className='cursor-pointer'>Notícias</button></li>
            <li><button onClick={() => navigate("/loja")} className='cursor-pointer'>Loja</button></li>


            <li className="relative">
              <button onClick={() => setDialogOpen(!dialogOpen)} className='cursor-pointer'>Conexões</button>

              {dialogOpen && (
                <div className="absolute top-8 left-0 w-40 bg-white  text-gray-800 rounded shadow-lg flex flex-col p-2 z-50">
                  <button
                    className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => { navigate("/mapaquadras"); setDialogOpen(false) }}
                  >
                    Mapa de Quadras
                  </button>
                  <button
                    className="w-full text-left px-2 py-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => { navigate("/jogadores"); setDialogOpen(false) }}
                  >
                    Área de atleta
                  </button>
                </div>
              )}
            </li>

            <li><button onClick={() => navigate("/sobre")} className='cursor-pointer'>Sobre</button></li>
          </ul>
        </nav>

    
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>


      <div className="flex items-center gap-2 sm:gap-4 text-white">
       
        <ButtonCadastro onClick={handleClick} />
      </div>


      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary-2 text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <button onClick={() => { navigate("/noticias"); setMenuOpen(false) }}>Notícias</button>
          <button onClick={() => { navigate("/loja"); setMenuOpen(false) }}>Loja</button>

   
          <div className="w-full flex flex-col items-start relative">
            <button
              className="w-full  px-4 py-2"
              onClick={() => setDialogOpen(!dialogOpen)}
            >
              Conexões
            </button>

            {dialogOpen && (
              <div className="w-full flex flex-col items-start bg-gray-100 text-gray-800 rounded shadow-md p-2">
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-200 rounded"
                  onClick={() => { navigate("/mapaquadras"); setDialogOpen(false); setMenuOpen(false); }}
                >
                   Mapa de Quadras
                </button>
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-200 rounded"
                  onClick={() => { navigate("/jogadores"); setDialogOpen(false); setMenuOpen(false); }}
                >
                  Área de atleta
                </button>
              </div>
            )}
          </div>

          <button onClick={() => { navigate("/sobre"); setMenuOpen(false) }}>Sobre</button>
        </div>
      )}
    </header>
  )
}
