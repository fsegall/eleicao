import React, { Component } from 'react';
import axios from 'axios';
import ResultadoSenadores from './resultadoSenadores';
import ResultadoGovernadores from './resultadoGovernadores';
import ResultadoPresidente from './resultadoPresidente';

export default class ResultadoPorCargo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleicaoDados: [],
      candidatoDados: [],
      isLoading: false
    }
    this.timer = null;
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.timer = setInterval(
      () => this.getListaEleicao(this.props.url), 3000
    )
  }

  componentWillReceiveProps = (nextProps) => {
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

        console.log('ok');
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

    if (isLoading) {
      return <p>Loading...</p>
    }

    let candidatosPrimeiros = [];
    let todosCandidatos = [];

    candidatoDados.map((candidato, index) => {
      if (eleicaoDados.carper === '5' && index < 4) {
        candidatosPrimeiros.push(candidato)
      } else if (index < '2') {
        candidatosPrimeiros.push(candidato)
      }
    }
    );

    candidatoDados.map((candidato) =>
      todosCandidatos.push(candidato)
    );



    return (
      <div>
        {console.log(eleicaoDados.carper)}

        {eleicaoDados.carper === '5' && <ResultadoSenadores candidatos={candidatosPrimeiros} eleicaoDados={eleicaoDados} todos={todosCandidatos} />}


        {eleicaoDados.carper === '3' && <ResultadoGovernadores candidatos={candidatosPrimeiros} eleicaoDados={eleicaoDados} todos={todosCandidatos} />}


        {eleicaoDados.carper === '1' && <ResultadoPresidente candidatos={candidatosPrimeiros} eleicaoDados={eleicaoDados} todos={todosCandidatos} />}

      </div>
    );

  }
}