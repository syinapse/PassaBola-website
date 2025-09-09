import React from 'react'

export const ButtonCadastro = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-1.5 text-white border-white border rounded-lg px-4 py-1'
    >
      <span>O</span>
      <span>Cadastra-se</span>
    </button>
  )
}
