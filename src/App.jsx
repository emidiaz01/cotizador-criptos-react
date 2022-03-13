import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCriptoPrincipal from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 1px auto 0 auto;


  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  return (
    <Contenedor>
      <Imagen
        src={ImagenCriptoPrincipal}
        alt="imagen principal criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
