import React from 'react'

function Produto({ nome, propriedades }) {
  return (
    <div style={{ border: '1px, solid', margin: '1rem 0', padding: '1rem' }} key={nome}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>)}
      </ul>
    </div>
  )
}

export default Produto