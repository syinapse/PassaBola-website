import React from 'react'

export const CardProduto = ({img, titulo, preco}) => {
  return (
    <div>
        <div className="rounded-xl shadow-xl shadow-gray-400/50 p-4 flex flex-col items-center">
 {img && (
        <img
          src={img}
          alt={titulo}
          className="w-32 h-32 object-cover mb-4"
        />
      )}
  <div className="w-full border-t border-gray-400 my-3"></div>
  <p className=" font-medium text-md">{titulo}</p>
  <p className="text-primary font-bold text-lg">{preco}</p>
</div>
    </div>
  )
}
