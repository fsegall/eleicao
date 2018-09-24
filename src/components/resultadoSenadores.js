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

${'' /*   display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;  
  repeat(auto-fit, minmax(20%, 1fr))*/}
  display: grid;
  ${'' /* grid-template-columns: repeat(4, 1fr); */}
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  text-align: center;
  justify-content: space-evenly;

  

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    justify-items: center;
    grid-gap: 1.3rem;
  }
  @media (max-width: 430px) {
    
    grid-template-columns: 1fr;
  }
`;


// Componente Completo

class ResultadoSenadores extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleicaoSenadorDF: [],
      senadorDF: [],
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

    axios.get(UrlSenadorDF)
      .then((response) => {
        /*         console.log(response.data.cand);
                console.log('ok'); */
        this.setState({
          eleicaoSenadorDF: response.data,
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

    const { eleicaoSenadorDF, senadorDF, isLoading } = this.state;

    /* console.log(eleicaoSenadorDF); */

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

          {console.log('number', this.state.eleicaoSenadorDF.vnom)}
          {arr.map((senador, index) => {

            {/* console.log(senador.v, this.state.eleicaoSenadorDF.vnom); */ }

            const senadorVotos = parseInt(senador.v) !== 0 ? parseInt(senador.v) : 1;

            const totalDeVotos = parseInt(this.state.eleicaoSenadorDF.vnom) !== 0 ? parseInt(this.state.eleicaoSenadorDF.vnom) : 1;


            return <CandidatoBox
              key={index}
              gender="male"
              eleitoSenador={`${senador.e}`}
              nome={`${senador.nm}`}
              partido={`${senador.cc}`}
              percentual={`${senadorVotos / totalDeVotos}`}
              votos={`${senador.v}`}
            />
          }
          )}

        </ContainerResultadosSenadores>

        <DemaisCandidatos />

      </React.Fragment>
    )
  }
};

export default ResultadoSenadores;