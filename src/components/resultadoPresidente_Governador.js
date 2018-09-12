import React from 'react';
import styled from 'styled-components';
import { GovPresDemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';

//
// Padrão Usado no Arquivo
// Container
// Subcomponentes
// Componentes Completos
// 

// Containers de Grid

// Bloco de resultados para Governador e Presidente
export const ContainerResultados = styled.div`
  place-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr;
  grid-gap: 2rem;
`;

// Resultados Governador
const ContainerGovernador = styled.div`
  grid-column: span 2;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
`;

// Resultados Presidente
const ContainerPresidente = styled.div`
  grid-column: span 4;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
`;

// Subcomponentes

// Nome do Cargo
const NomeCargo = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
`;

// Foto Alinhada por padrão para o primeiro colocado
const QuadroPresGov = styled.div`
  height: 8rem;
  width: 6rem;
  border: 0.5rem solid #0095da;
  margin-bottom: 0.5rem;
  grid-column: span 1;
  grid-row: 2 / 3;
  margin: 0 1rem 0 1rem;
`;

// Grid se precisar posicionar algo no container da primeira foto
/* export const GovernadorPrimeiro = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
` */

// Foto alinhada para o segundo colocado
const QuadroFotoSegundo = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

// Display flex para alinhar texto ao lado da foto
const BoxTextoHorizontal = styled.div`
  display: flex;
`;

// Componentes Completos 

export const ResultadoGovernador = () => {
  return (

    <ContainerGovernador>

      <NomeCargo>
        Governador
      </NomeCargo>

      <BoxTextoHorizontal>
        <QuadroPresGov />
        <CandidatoBox
          nome="João Silva"
          partido="PSDB"
          percentual="30.00"
          votos="5000"
        />
      </BoxTextoHorizontal>

      <BoxTextoHorizontal>
        <QuadroFotoSegundo>
          <QuadroPresGov />
        </QuadroFotoSegundo>
        <CandidatoBox
          nome="João Silva"
          partido="PSDB"
          percentual="30.00"
          votos="5000"
        />
      </BoxTextoHorizontal>

      <GovPresDemaisCandidatos />

    </ContainerGovernador>
  )
}

export const ResultadoPresidente = () => {

  return (

    <ContainerPresidente>

      <NomeCargo>
        Presidente
      </NomeCargo>

      <BoxTextoHorizontal>
        <QuadroPresGov />
        <CandidatoBox
          nome="João Silva"
          partido="PSDB"
          percentual="30.00"
          votos="5000"
        />
      </BoxTextoHorizontal>

      <BoxTextoHorizontal>
        <QuadroFotoSegundo>
          <QuadroPresGov />
        </QuadroFotoSegundo>
        <CandidatoBox
          nome="João Silva"
          partido="PSDB"
          percentual="30.00"
          votos="5000"
        />
      </BoxTextoHorizontal>

      <GovPresDemaisCandidatos />

    </ContainerPresidente>

  )
}

