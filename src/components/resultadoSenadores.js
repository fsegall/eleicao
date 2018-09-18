import React from 'react';
import { DemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';
import styled from 'styled-components';

//
// Padrão Usado no Arquivo
// Container
// Subcomponentes
// Componentes Completos
//


// Container de Grid

const ContainerResultadosSenadores = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
`;


// Subcomponentes de Grid



// Componente Completo

const ResultadoSenadores = () => {

  return (

    <React.Fragment>

      <ContainerResultadosSenadores>

        <CandidatoBox
          gender="male"
          eleitoSenador="sim"
          nome="João Silva"
          partido="PPS"
          percentual="57.61"
          votos="826.576"
        />



        <CandidatoBox
          gender="female"
          eleitoSenador="sim"
          nome="Joana Silva"
          partido="PMDB"
          percentual="18.92"
          votos="826.576"
        />



        <CandidatoBox
          gender="male"
          eleitoSenador="não"
          nome="José Silva"
          partido="PDT"
          percentual="15.34"
          votos="269.791"
        />



        <CandidatoBox
          gender="female"
          eleitoSenador="não"
          nome="Maria Silva"
          partido="Rede"
          percentual="15.07"
          votos="265.562"
        />

      </ContainerResultadosSenadores>

      <DemaisCandidatos />

    </React.Fragment>
  )
};

export default ResultadoSenadores;