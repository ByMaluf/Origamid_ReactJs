import React from 'react'

function ProdutoHook({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{`R$ ${dados.preco}`}</p>
      {dados.fotos.map(({ src, titulo }) => <img key={src} src={src} alt={titulo} />)}
    </div>
  )
}

export default ProdutoHook;