import React, { Component } from 'react';
import axios from 'axios';
import ResultadoSenadores from './senadoresResultado';
import ResultadoGovernadores from './governadoresResultado';
import ResultadoPresidente from './presidenteResultado';

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
      () => this.getListaEleicao(this.props.url), 10000
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
      () => this.getListaEleicao(nextProps.url), 10000
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

    let candidatos = [];

    const Primeiros = candidatoDados.map((candidato, index) => {
      if (eleicaoDados.carper === '5' && index < 4) {
        candidatos.push(candidato)
      } else if (index < '2') {
        candidatos.push(candidato)
      }
    }
    );

    return (
      <div>
        {console.log(eleicaoDados.carper)}

        {eleicaoDados.carper === '5' && <ResultadoSenadores candidatos={candidatos} eleicaoDados={eleicaoDados} />}


        {eleicaoDados.carper === '3' && <ResultadoGovernadores candidatos={candidatos} eleicaoDados={eleicaoDados} />}


        {eleicaoDados.carper === '1' && <ResultadoPresidente candidatos={candidatos} eleicaoDados={eleicaoDados} />}

      </div>
    );

  }
}