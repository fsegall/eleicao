import React from 'react';
import styled from 'styled-components';

export const BarraContainer = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr 1fr;
  height: 6rem;
  
`
export const EstadoSelecionado = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border: 1px solid #ccc;;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  font-size: 3rem;
  color: #484848;
`
export const Divisor = styled.div`
  grid-column: 2 / span 2;
  border-bottom: 0.6rem solid #0095da;
`

export const SenadorVotos = styled.div`
  grid-column: 2 / span 1;
  justify-self: start;
  align-self: end;
  
  color: #484848;
  font-size: 0.6rem;
  margin-left: 0.6rem;
  letter-spacing: 0.1rem;
  > span {
    display: block;
    font-size: 3rem;
  }
`
  /* export const EstadoSelecionado = styled.div`
    border: 1px solid black;
    grid-column: 1 / 2;
  `
  export const EstadoSelecionado = styled.div`
    border: 1px solid #ccc;
    grid-column: 1 / 2; */

