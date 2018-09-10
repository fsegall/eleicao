import React from 'react';
import styled from 'styled-components';

export const ContainerResultados = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
`;

export const ContainerGovernador = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  height: 20rem;
`;

export const ContainerPresidente = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  height: 20rem;
`;

export const NomeGovernador = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
`;

export const NomePresidente = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
`;