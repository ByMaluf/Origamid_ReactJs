import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto';

function Produtos() {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <React.Fragment>
      <Titulo titulo={'Produtos'} />
      {produtos.map(produto => <Produto key={produto.nome} {...produto} />)}
    </React.Fragment>
  )
}

export default Produtos