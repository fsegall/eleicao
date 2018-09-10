import React from 'react';
import styled from 'styled-components';

export const DemaisCandidatosContainer = styled.div`
  display: grid;
  place-items: center;
  select {
    width: 90%;
    height: 2rem;
    font-weight: bold;
    color: #484848;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`

export const DemaisCandidatos = () => {
  return (

    <select>
      <option disabled selected>Demais candidatos</option>
      <option value="Fulano">Fulano</option>
      <option value="Beltrano">Beltrano</option>
    </select>
  )
};