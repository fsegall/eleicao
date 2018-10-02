import React from 'react';
/* import { GovPresDemaisCandidatos } from './demaisCandidatos'; */
import CandidatoBox from './candidatoBox';
import maleImage from '../img/male-placeholder.png';
import styled from 'styled-components';
import OutrosCandidatos from './outrosCandidatos';

//
// Padrão Usado no Arquivo
// Container
// Componentes Completos
//

// Container de Grid

// Resultados Governador

const ContainerGovernador = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  width: 100%;
  display: grid;
  margin-bottom: 1rem;
`;

// Outros candidatos

const ContainerOutros = styled.div`
  grid-column: span 2;
  margin: 0 1rem;
`;

// Nome do Cargo

const NomeCargoGov = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
  display: flex;
  span {
    margin-left: 1rem;
  }
  .uf {
    border-left: 0.3rem solid #0095da;
    padding-left: 0.3rem;
  }
`;

// Foto Alinhada por padrão para o primeiro colocado

const QuadroPresGov = styled.div`
  
  height: 8rem;
  width: 6rem;
  border: 3px solid #0095da;
  margin-bottom: 0.5rem;
  grid-column: span 1;
  grid-row: 2 / 3;
  margin: 0 1rem 0 1rem;
  img {
   
    height: 8rem;
    width: 6rem;
  }
  @media (max-width: 736px){

  display: block;
  text-align: center;
  }
`;

// Display flex para alinhar texto ao lado da foto

const BoxTextoHorizontal = styled.div`
  display: flex;
  @media (max-width: 736px){
  grid-column: span 2;
  margin-bottom: 0.8rem;
  text-align: left;
}
`;

// Componente Completo

const ResultadoGovernadores = (props) => {

  return (
    <ContainerGovernador>

      <NomeCargoGov>
        Governador
        <span className="uf">Eleito</span>

      </NomeCargoGov>

      {props.candidatos.map((candidato, index) => {



        const candidatoVotos = parseInt(candidato.v);

        const totalDeVotos = parseInt(props.eleicaoDados.vnom) !== 0 ? parseInt(props.eleicaoDados.vnom) : 1;

        const percentual = (candidatoVotos / totalDeVotos * 100).toFixed(2);

        return <BoxTextoHorizontal key={index}>
          <QuadroPresGov>
            <img src={maleImage} />
          </QuadroPresGov>
          <CandidatoBox
            key={index}
            gender="male"
            eleito={`${candidato.e}`}
            nome={`${candidato.nm}`}
            partido={`${candidato.cc}`}
            percentual={percentual}
            votos={`${candidato.v}`}
          />
        </BoxTextoHorizontal>
      }
      )}
      {/* <GovPresDemaisCandidatos /> */}
      <ContainerOutros>
        <OutrosCandidatos todos={props.todos} />
      </ContainerOutros>
    </ContainerGovernador>
  )
}

export default ResultadoGovernadores;