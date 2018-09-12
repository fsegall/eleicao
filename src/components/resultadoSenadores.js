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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30rem;
  place-items: center;
  text-align: center;
`;


// Subcomponentes de Grid

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


// Componente Completo

const ResultadoSenadores = () => {

  return (

    <React.Fragment>

      <ContainerResultadosSenadores>

        <SenadorPrimeiro>
          <CandidatoBox
            eleitoSenador="sim"
            nome="João Silva"
            partido="PPS"
            percentual="57.61"
            votos="826.576"
          />
        </SenadorPrimeiro>

        <SenadorSegundo>
          <CandidatoBox
            eleitoSenador="sim"
            nome="Joana Silva"
            partido="PMDB"
            percentual="18.92"
            votos="826.576"
          />
        </SenadorSegundo>

        <SenadorTerceiro>
          <CandidatoBox
            eleitoSenador="não"
            nome="José Silva"
            partido="PDT"
            percentual="15.34"
            votos="269.791"
          />
        </SenadorTerceiro>

        <SenadorQuarto>
          <CandidatoBox
            eleitoSenador="não"
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