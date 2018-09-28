import React, { Component } from 'react';
import { GovPresDemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';
import maleImage from '../img/male-placeholder.png';
import styled from 'styled-components';
import axios from 'axios';

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
  height: 100%;
  display: grid;
  @media (min-width: 736px ) and (max-width: 1025px){
  text-align: left;
  }
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
  border: 0.5rem solid #0095da;
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
}
`;

// Componente Completo

class ResultadoGovernadores extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleicaoDados: [],
      candidatoDados: [],
      isLoading: false
    }
    this.timer = null;
    /* this.onchange = this.onChange.bind(this); */
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.timer = setInterval(
      () => this.getListaEleicao(this.props.url), 3000
    )
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('componentProps', nextProps);
    clearInterval(this.timer)
    this.setState({
      eleicaoDados: [],
      candidatoDados: [],
      isLoading: true
    });
    this.timer = setInterval(
      () => this.getListaEleicao(nextProps.url), 3000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }


  getListaEleicao = (url) => {
    axios.get(url)
      .then((response) => {

        console.log('Governadores ok');
        this.setState({
          eleicaoDados: response.data,
          candidatoDados: response.data.cand.sort(function (
            obj1,
            obj2
          ) {
            return obj1.seq - obj2.seq;
          }),
          isLoading: false
        })
      })
      .catch(err => console.log(err));
  }

  render() {

    const { eleicaoDados, candidatoDados, isLoading } = this.state;


    /* console.log(eleicaoSenadorDF); */

    if (isLoading) {
      return <p>Loading...</p>
    }

    let candidatos = [];

    const Primeiros = candidatoDados.map((candidato, index) => {
      if (index < 2) {
        candidatos.push(candidato)
      }
    }
    );

    return (
      <ContainerGovernador>

        <NomeCargoGov>
          Governador
        <span className="uf">Eleito</span>
          {/* <span>Eleitos para o Segundo Turno</span> */}
        </NomeCargoGov>

        {candidatos.map((candidato, index) => {

          {/* console.log(senador.v, this.state.eleicaoSenadorDF.vnom); */ }

          const candidatoVotos = parseInt(candidato.v);

          const totalDeVotos = parseInt(eleicaoDados.vnom) !== 0 ? parseInt(eleicaoDados.vnom) : 1;

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
        <GovPresDemaisCandidatos />

      </ContainerGovernador>
    )
  }
};

export default ResultadoGovernadores;