import React, { Component } from 'react';
import { DemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';
import styled from 'styled-components';
import axios from 'axios';

const UrlSenadorDF = 'https://www12.senado.leg.br/_app/apuracao/ag/df/senador.json';

//
// Padrão Usado no Arquivo
// Container
// Componentes Completos
//


// Container de Grid

const ContainerResultadosSenadores = styled.div`

  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    justify-items: center;
    grid-gap: 1.3rem;
  }
`;


// Componente Completo

class ResultadoSenadores extends Component {

  constructor(props) {
    super(props)
    this.state = {
      senadorDF: [],
      isLoading: false
    }
    this.timer = null;
    /* this.onchange = this.onChange.bind(this); */
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.timer = setInterval(
      this.getListaEleicao, 2000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  getListaEleicao = () => {

    axios.get(UrlSenadorDF)
      .then((response) => {
        console.log(response.data.cand);
        console.log('ok');
        this.setState({
          senadorDF: response.data.cand.sort(function (
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

    const { senadorDF, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    let arr = [];

    const Primeiros = senadorDF.map((senador, index) => {
      if (index < 4) {
        arr.push(senador)
      }
    }
    );

    return (

      <React.Fragment>

        <ContainerResultadosSenadores>

          {arr.map((senador) =>

            <CandidatoBox
              gender="male"
              eleitoSenador="sim"
              nome={`${senador.nm}`}
              partido={`${senador.cc}`}
              percentual="100"
              votos={`${senador.v}`}
            />

          )}

        </ContainerResultadosSenadores>

        <DemaisCandidatos />

      </React.Fragment>
    )
  }
};

export default ResultadoSenadores;