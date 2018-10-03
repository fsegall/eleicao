import React from 'react';
import CandidatoBox from './candidatoBox';
import styled from 'styled-components';
import OutrosCandidatos from './outrosCandidatos';
import BarraSenador from './barraResultadoSenadores';

//
// Padrão Usado no Arquivo
// Container
// Componentes Completos
//

// Container de Grid

const ContainerResultadosSenadores = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  text-align: center;
  justify-content: space-evenly;
  grid-gap: 1.3rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    justify-items: center;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;


// Componente Funcional

const ResultadoSenadores = (props) => {



  return (

    <React.Fragment>

      <BarraSenador uf={props.uf} eleicaoDados={props.eleicaoDados} />

      <ContainerResultadosSenadores>


        {props.candidatos.map((candidato, index) => {

          const candidatoVotos = parseInt(candidato.v);

          const totalDeVotos = parseInt(props.eleicaoDados.vnom) !== 0 ? parseInt(props.eleicaoDados.vnom) : 1;

          const percentual = (candidatoVotos / totalDeVotos * 100).toFixed(2);

          const ufUrl = props.uf.toLowerCase();

          return (


            <CandidatoBox
              key={index}
              gender="male"
              eleitoSenador={`${candidato.e}`}
              eleito={`${candidato.e}`}
              nome={`${candidato.nm}`}
              partido={`${candidato.cc}`}
              percentual={percentual}
              votos={`${candidato.v}`}
              srcImagem={`https://www12.senado.leg.br/_app/apuracao/foto/${ufUrl}/senador/${candidato.n}/${candidato.sqcand}.jpeg`}
            />


          )
        }
        )}

      </ContainerResultadosSenadores>

      {/* <DemaisCandidatos /> */}
      <OutrosCandidatos todos={props.todos} />

    </React.Fragment>
  )
}

export default ResultadoSenadores;
