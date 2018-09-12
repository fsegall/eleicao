import React from 'react';
import { DemaisCandidatos } from './demaisCandidatos';
import SenadorBox from './senador';
import styled from 'styled-components';

const ContainerResultadosSenadores = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30rem;
  place-items: center;
  text-align: center;
`;

const SenadorPrimeiro = styled.div`
  grid-column: 1 /2;
`;

const SenadorSegundo = styled.div`
  grid-column: 2 / 3;
`;

const SenadorTerceiro = styled.div`
  grid-column: 3 / 4;
`;

const SenadorQuarto = styled.div`
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

const ResultadoSenadores = () => {

  return (

    <React.Fragment>

      <ContainerResultadosSenadores>

        <SenadorPrimeiro>
          <SenadorBox
            eleito="sim"
            nome="João Silva"
            partido="PPS"
            percentual="57.61"
            votos="826.576"
          />
        </SenadorPrimeiro>

        <SenadorSegundo>
          <SenadorBox
            eleito="sim"
            nome="Joana Silva"
            partido="PMDB"
            percentual="18.92"
            votos="826.576"
          />
        </SenadorSegundo>

        <SenadorTerceiro>
          <SenadorBox
            nome="José Silva"
            partido="PDT"
            percentual="15.34"
            votos="269.791"
          />
        </SenadorTerceiro>

        <SenadorQuarto>
          <SenadorBox
            nome="Maria Silva"
            partido="Rede"
            percentual="15.07"
            votos="265.562"
          />
        </SenadorQuarto>

      </ContainerResultadosSenadores>

      <DemaisCandidatos />

    </React.Fragment>
  )
};

export default ResultadoSenadores;