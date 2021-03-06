import React from 'react'
/* import { GovPresDemaisCandidatos } from './demaisCandidatos'; */
import CandidatoBox from './candidatoBox'
import styled from 'styled-components'
import OutrosCandidatos from './outrosCandidatos'
import Faker from 'faker'

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
`

// Outros candidatos

const ContainerOutros = styled.div`
  grid-column: span 2;
  margin: 0 1rem;
`

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
`

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
  @media (max-width: 736px) {
    display: block;
    text-align: center;
  }
`

// Display flex para alinhar texto ao lado da foto

const BoxTextoHorizontal = styled.div`
  display: flex;
  @media (max-width: 736px) {
    grid-column: span 2;
    margin-bottom: 0.8rem;
    text-align: left;
  }
`

// Componente Completo

const ResultadoGovernadores = props => {
  // console.log('chegou', props.uf)

  console.log('Faker', Faker.image.avatar())

  const eleitos = props.candidatos.filter(candidato => candidato.e === 's')

  return (
    <ContainerGovernador>
      <NomeCargoGov>
        Governador
        {eleitos.length > 1 && <span className='uf'>Segundo Turno</span>}
        {eleitos.length === 1 && <span className='uf'>Eleito</span>}
      </NomeCargoGov>

      {props.candidatos.map((candidato, index) => {
        const candidatoVotos = parseInt(candidato.v)

        const totalDeVotos =
          parseInt(props.eleicaoDados.vnom) !== 0
            ? parseInt(props.eleicaoDados.vnom)
            : 1

        const percentual = ((candidatoVotos / totalDeVotos) * 100).toFixed(2)

        return (
          <BoxTextoHorizontal key={index}>
            <QuadroPresGov>
              <img src={Faker.image.avatar()} />
              {/*             <img src={`http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/297/fotos/${props.uf}/${candidato.sqcand}.jpeg`} /> */}
            </QuadroPresGov>
            <CandidatoBox
              key={index}
              gender='male'
              eleito={`${candidato.e}`}
              nome={`${candidato.nm}`}
              partido={`${candidato.cc}`}
              percentual={percentual}
              votos={`${candidato.v}`}
            />
          </BoxTextoHorizontal>
        )
      })}
      {/* <GovPresDemaisCandidatos /> */}
      <ContainerOutros>
        <OutrosCandidatos todos={props.todos} />
      </ContainerOutros>
    </ContainerGovernador>
  )
}

export default ResultadoGovernadores

/*

http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/297/config/dadosdivweb/${props.uf}/distribuicao/${props.uf}/fotos/${props.uf}/-${candidato.sqcand}.jpeg-w.js

*/

/* src={`https://www12.senado.leg.br/_app/apuracao/foto/${props.uf}/${candidato.sqcand}.jpeg`} */
