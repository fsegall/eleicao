import React from 'react';
import styled from 'styled-components';

export const BarraContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const EstadoSelecionado = styled.div`
  border: 1px solid #ccc;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  font-size: 3rem;
  color: #484848;
`
export const SenadorVotos = styled.div`
  color: #484848;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  border-bottom: 0.5rem solid #0095da;

  > span {
    display: block;
    font-size: 3rem;
  }
`
export const UrnasVotos = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #484848;
  font-size: 0.6rem;
  > span {
    margin-right: 0.6rem;
  }
  > p {
    margin-right: 1rem;
  }
  letter-spacing: 0.1rem;
  border-bottom: 0.5rem solid #0095da;
  

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

