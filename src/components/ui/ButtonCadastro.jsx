import React from 'react'
import perfil from '../../assets/icons/perfilIcon.svg'
export const ButtonCadastro = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-1.5 items-center text-white border-white border-[1.50px] rounded-lg px-4 py-1 cursor-pointer'
    >
        <img src={perfil} alt="Logo" className="w-6 h-6 object-contain" />
      <span>Cadastra-se</span>
    </button>
  )
}
