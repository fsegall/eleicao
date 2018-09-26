import React, { Component } from 'react';
import { DemaisCandidatos } from './demaisCandidatos';
import CandidatoBox from './candidatoBox';
import styled from 'styled-components';
import axios from 'axios';

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
      this.getListaEleicao(this.props.url), 1000
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
      this.getListaEleicao(nextProps.url), 1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }


  getListaEleicao = (url) => {
    axios.get(url)
      .then((response) => {
        /*         console.log(response.data.cand);
                console.log('ok'); */
        console.log('Teste');
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
      if (index < 4) {
        candidatos.push(candidato)
      }
    }
    );

    return (

      <React.Fragment>

        <ContainerResultadosSenadores>


          {candidatos.map((candidato, index) => {

            {/* console.log(senador.v, this.state.eleicaoSenadorDF.vnom); */ }

            const candidatoVotos = parseInt(candidato.v);

            const totalDeVotos = parseInt(eleicaoDados.vnom) !== 0 ? parseInt(eleicaoDados.vnom) : 1;

            const percentual = (candidatoVotos / totalDeVotos * 100).toFixed(2);

            return <CandidatoBox
              key={index}
              gender="male"
              eleitoSenador={`${candidato.e}`}
              eleito={`${candidato.e}`}
              nome={`${candidato.nm}`}
              partido={`${candidato.cc}`}
              percentual={percentual}
              votos={`${candidato.v}`}
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


