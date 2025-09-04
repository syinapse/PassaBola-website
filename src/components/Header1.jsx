import React from 'react'
import { ButtonCadastro } from './ui/ButtonCadastro'

export const Header1 = () => {
  const handleClick = () => {
    alert('Botão clicado!')
  }

  return (
    <header className="flex justify-between items-center p-4 bg-black">

      <div className="flex items-center gap-20   text-amber-50 font-bold">
        <h1 className="text-xl font-bold  ">LOGO</h1>
        <nav>
          <ul className="flex gap-20  ">
            <li><a href="#noticias" >Notícias</a></li>
            <li><a href="#loja">Loja</a></li>
            <li><a href="#conexoes">Conexões</a></li>
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
