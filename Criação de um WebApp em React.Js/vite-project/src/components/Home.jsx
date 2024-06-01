import React from 'react'
import Titulo from './Titulo'

function Home() {
  return (
    <React.Fragment>
      <Titulo titulo={'Home'}/>
      <p>Essa é a home do site.</p>
    </React.Fragment>
  )
}

export default Home