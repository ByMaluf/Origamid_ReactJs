import React from 'react'

function ProdutoHookUseEffect({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{`R$ ${dados.preco}`}</p>
    </div>
  )
}

export default ProdutoHookUseEffect;