import React from 'react';
import styled from 'styled-components';

export const ContainerResultados = styled.div`
  place-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr;
  grid-gap: 2rem;
`;

export const ContainerGovernador = styled.div`
  grid-column: span 2;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const ContainerPresidente = styled.div`
  grid-column: span 4;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const NomeGovernador = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
`;

export const QuadroPresGov = styled.div`

  height: 8rem;
  width: 6rem;
  border: 0.5rem solid #0095da;
  margin-bottom: 0.5rem;
  grid-column: span 1;
  grid-row: 2 / 3;
  margin: 0 1rem 0 1rem;
`;

/* export const GovernadorPrimeiro = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
` */

export const GovernadorFoto2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

export const GovPresDemaisCandidatos = styled.div`
  grid-column: span 2;
`;


export const FlexTest = styled.div`
  display: flex;
`;