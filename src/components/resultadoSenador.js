import React from 'react';
/* import demaisCandidatos from './demaisCandidatos'; */
import styled from 'styled-components';

export const ResultadoSenadoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30rem;
  place-items: center;
  text-align: center;
`;

export const SenadorPrimeiro = styled.div`
  grid-column: 1 /2;
`;

export const SenadorSegundo = styled.div`
  grid-column: 2 / 3;
`;

export const SenadorTerceiro = styled.div`
  grid-column: 3 / 4;
`;

export const SenadorQuarto = styled.div`
  grid-column: 4 / 5;
`;

export const SenadorQuadroFoto = styled.div`
  height: 16rem;
  width: 12rem;
  border: 0.5rem solid #0095da;
  margin-bottom: 0.5rem;
  
  > span {
    position: relative;
    top: -0.8rem;
    align-self: top;
    padding: 10px 20px;
    background-color:#d84136;
    color: #fff;
  }
`;

export const NomeSenador = styled.span`
  font-size: 1.5rem;
  color: #484848;
  font-weight: bold;
  display: block;
`;

export const VotosSenador = styled.span`
  font-size: 0.8rem;
  color: #484848;
  display: block;
  &::after {
    content:" votos";
  }
`;

export const PercentualSenador = styled.span`
  font-size: 2rem;
  color: #484848;
  display: block;
  padding-top: 3rem;
  &::after {
    content:"%";
  }
`;

export const PartidoSenador = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #ccc;
  display: block;
`;

export const Separador = styled.hr`
  margin: 2rem 0 2rem 0;
  background-color: #ccc;
  height: 0.5rem;
  border: none;
`;