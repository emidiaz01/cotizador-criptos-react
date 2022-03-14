import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
`;

const useSelectMonedas = (label, opciones) => {
    //opciones corresponde al segundo parametro monedas del hook SelectMonedas
  // se le pasa el primer parametro a useSelectMonedas label desde SelectMonedas de Formulario
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Seleccione</option>

        {opciones.map((opcion) => (
          <option 
          key={opcion.id} 
          value={opcion.id}>{opcion.nombre}</option>
        ))}
      </select>
    </>
  );

  return [SelectMonedas];
};

export default useSelectMonedas;
