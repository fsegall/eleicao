import React from 'react';
import styled from 'styled-components';


// Container para uso na grid do resultado dos Senadores

const DemaisCandidatosContainer = styled.div`
  padding: 1rem;
  select {
    width: 100%;
    height: 2rem;
    font-weight: bold;
    color: #484848;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    padding-left: 0.5rem;
  }
`

// Componente Senador

export const DemaisCandidatos = () => {
  return (
    <DemaisCandidatosContainer>
      <select>
        <option disabled selected>Demais candidatos</option>
        <option value="Fulano">Fulano</option>
        <option value="Beltrano">Beltrano</option>
      </select>
    </DemaisCandidatosContainer>
  )
};

// Container para uso na grid de Governador e Presidente

const GovPresDemaisContainer = styled.div`
  grid-column: span 2;
`;

// Componente Governador e Presidente

export const GovPresDemaisCandidatos = () => {
  return (
    <GovPresDemaisContainer>
      <DemaisCandidatos />
    </GovPresDemaisContainer>
  );
}