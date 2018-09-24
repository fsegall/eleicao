import React, { Component } from 'react';
import styled from 'styled-components';
import { GovPresDemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';
import maleImage from '../img/male-placeholder.png';
import axios from 'axios';

const UrlGovernadorDF = 'https://www12.senado.leg.br/_app/apuracao/ag/df/governador.json';
const UrlPresDF = 'https://www12.senado.leg.br/_app/apuracao/ag/df/presidente.json';
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

  @media (max-width: 1025px) {
    display: block;
    text-align: center;
    margin-right: 1rem;
  }
`;

// Resultados Governador

const ContainerGovernador = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
`;

// Resultados Presidente

const ContainerPresidente = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  border: 1px solid #ccc;
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  display: grid;
  
`;

// Subcomponentes

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

const NomeCargo = styled.h3`
  border-bottom: 1px solid #ccc;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: #484848;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
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
  margin: auto;
  }
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
  @media (max-width: 736px){
  display: block;
  text-align: center;
}
`;

// Componentes Completos 

export class ResultadoGovernador extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleicaoGovernadorDF: [],
      governadorDF: [],
      isLoading: false
    }
    this.timer = null;
    /* this.onchange = this.onChange.bind(this); */
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.timer = setInterval(
      this.getListaEleicao, 1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  getListaEleicao = () => {

    axios.get(UrlGovernadorDF)
      .then((response) => {
        /*         console.log(response.data.cand);
                console.log('ok'); */
        this.setState({
          eleicaoGovernadorDF: response.data,
          governadorDF: response.data.cand.sort(function (
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

    const { eleicaoGovernadorDF, governadorDF, isLoading } = this.state;

    /* console.log(eleicaoSenadorDF); */

    if (isLoading) {
      return <p>Loading...</p>
    }

    let arr = [];

    const Primeiros = governadorDF.map((governador, index) => {
      if (index < 2) {
        arr.push(governador)
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

        {arr.map((governador, index) => {



          const governadorVotos = parseInt(governador.v);

          const totalDeVotos = parseInt(this.state.eleicaoGovernadorDF.vnom) !== 0 ? parseInt(this.state.eleicaoGovernadorDF.vnom) : 1;


          return <BoxTextoHorizontal key={index}>
            <QuadroPresGov>
              <img src={maleImage} />
            </QuadroPresGov>
            <CandidatoBox
              gender="male"
              eleito={`${governador.e}`}
              nome={`${governador.nm}`}
              partido={`${governador.cc}`}
              percentual={`${governadorVotos / totalDeVotos}`}
              votos={`${governador.v}`}
            />
          </BoxTextoHorizontal>
        }
        )}
        <GovPresDemaisCandidatos />

      </ContainerGovernador>
    )
  }
}

export class ResultadoPresidente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleicaoPresidenteDF: [],
      presidenteDF: [],
      isLoading: false
    }
    this.timer = null;
    /* this.onchange = this.onChange.bind(this); */
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.timer = setInterval(
      this.getListaEleicao, 1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  getListaEleicao = () => {

    axios.get(UrlPresDF)
      .then((response) => {
        /*         console.log(response.data.cand);
                console.log('ok'); */
        this.setState({
          eleicaoPresidenteDF: response.data,
          presidenteDF: response.data.cand.sort(function (
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

    const { eleicaoPresidenteDF, presidenteDF, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    let arr = [];

    const Primeiros = presidenteDF.map((presidente, index) => {
      if (index < 2) {
        arr.push(presidente)
      }
    }
    );

    return (

      <ContainerPresidente>

        <NomeCargo>
          <span>
            Presidente
            </span>

          <div className="uf">
            DF
              </div>
          <span className="uf">
            Nacional
            </span>
        </NomeCargo>

        {
          arr.map((presidente, index) => {

            const presidenteVotos = parseInt(presidente.v);

            const totalDeVotos = parseInt(this.state.eleicaoPresidenteDF.vnom) !== 0 ? parseInt(this.state.eleicaoPresidenteDF.vnom) : 1;

            return <BoxTextoHorizontal key={index}>
              <QuadroPresGov>
                <img src={maleImage} />
              </QuadroPresGov>
              <CandidatoBox
                gender="male"
                eleito={`${presidente.e}`}
                nome={`${presidente.nm}`}
                partido={`${presidente.cc}`}
                percentual={`${presidenteVotos / totalDeVotos}`}
                votos={`${presidente.v}`}
              />
            </BoxTextoHorizontal>
          })
        }
        <GovPresDemaisCandidatos />
      </ContainerPresidente>
    )
  }
}