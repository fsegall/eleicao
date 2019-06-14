import React from 'react'
import CandidatoBox from './candidatoBox'
import styled from 'styled-components'
import OutrosCandidatos from './outrosCandidatos'
import BarraSenador from './barraResultadoSenadores'
import Faker from 'faker'

//
// Padrão Usado no Arquivo
// Container
// Componentes Completos
//

// Container de Grid

// Outros candidatos

const ContainerOutros = styled.div`
  grid-column: span 2;
  margin: 0 1rem;
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
    ${''}
    height: 8rem;
    width: 6rem;
  }
`

// Resultados Presidente

const ContainerPresidente = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  display: grid;
  width: 100%;
  @media (min-width: 736px) and (max-width: 1025px) {
    text-align: left;
  }
`

const NomeCargo = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
  display: flex;
  span {
    margin-right: 1rem;
  }
  .uf {
    border-left: 0.3rem solid #0095da;
    padding-left: 0.3rem;
    text-transform: uppercase;
  }
`

// Subcomponentes

// Display flex para alinhar texto ao lado da foto

const BoxTextoHorizontal = styled.div`
  display: flex;
  @media (max-width: 736px) {
    grid-column: span 2;
    margin-bottom: 0.8rem;
  }
`

// Componente Completo

const ResultadoPresidente = props => {
  console.log('Presidente Props', props.uf)
  return (
    <div>
      {props.uf === 'br' && (
        <BarraSenador uf={props.uf} eleicaoDados={props.eleicaoDados} />
      )}
      <ContainerPresidente>
        <NomeCargo>
          <span>Presidente</span>

          <div className='uf'>{props.uf}</div>
          {/*         <span className="uf">
          Nacional
        </span> */}
        </NomeCargo>

        {props.candidatos.map((candidato, index) => {
          const candidatoVotos = parseInt(candidato.v)

          const totalDeVotos =
            parseInt(props.eleicaoDados.vnom) !== 0
              ? parseInt(props.eleicaoDados.vnom)
              : 1

          const percentual = ((candidatoVotos / totalDeVotos) * 100).toFixed(2)
          console.log('avatar', Faker.image.avatar())
          return (
            <BoxTextoHorizontal key={index}>
              <QuadroPresGov>
                <img src={Faker.image.avatar()} />
                {/*               <img src={`http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/295/fotos/${props.uf}/${candidato.sqcand}.jpeg`} /> */}
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
      </ContainerPresidente>
    </div>
  )
}

/* {`https://www12.senado.leg.br/_app/apuracao/foto/br/${candidato.sqcand}.jpeg`} */

export default ResultadoPresidente
