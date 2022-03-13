import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCriptoPrincipal from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`
const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #fff;
`
const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`

function App() {
  return (
    <Contenedor>
      <Imagen 
         src={ImagenCriptoPrincipal}
         alt='imagen principal criptomonedas'
      />
    <Heading>Desde App</Heading>
    </Contenedor>

  )
}

export default App
