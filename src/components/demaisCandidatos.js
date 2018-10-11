import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const SelectContainer = styled.div`
  width: 96%;
  margin: auto;
  padding: 1rem 0 1rem 0;
`;

const options = [
  { value: 'Demais Candidatos', label: 'Demais Candidatos' },
  { value: 'Fulano', label: 'Fulano' },
  { value: 'Beltrano', label: 'Beltrano' }
]

export const DemaisCandidatos = () => {
  return (
    <SelectContainer>
      <Select options={options} placeholder='Demais Candidatos' />
    </SelectContainer>
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
      <SelectContainer>
        <Select options={options} placeholder='Demais Candidatos' />
      </SelectContainer>
    </GovPresDemaisContainer>
  );
}