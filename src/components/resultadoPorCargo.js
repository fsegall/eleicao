import React, { Component } from 'react'
import axios from 'axios'
import ResultadoSenadores from './resultadoSenadores'
import ResultadoGovernadores from './resultadoGovernadores'
import ResultadoPresidente from './resultadoPresidente'
import resultadoNacional from '../../nodeServer/dadosEleicao2018/Presidente/Presidente_df_fake.json'
console.log('Dados Nacionais', resultadoNacional)

export default class ResultadoPorCargo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eleicaoDados: [],
      candidatoDados: [],
      isLoading: false
    }
    this.timer = null
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.timer = setTimeout(() => this.getListaEleicao(this.props.url), 1)
  }

  componentWillReceiveProps = nextProps => {
    clearInterval(this.timer)
    this.setState({
      eleicaoDados: [],
      candidatoDados: [],
      isLoading: true
    })
    this.timer = setTimeout(() => this.getListaEleicao(nextProps.url), 1)
  }

  /*   componentWillUnmount = () => {
      clearInterval(this.timer)
    } */

  getListaEleicao = url => {
    /*     axios
      .get(url)
      .then(response => {
        console.log('ok') */
    this.setState({
      eleicaoDados: resultadoNacional,
      candidatoDados: resultadoNacional.cand.sort(function (obj1, obj2) {
        return obj1.seq - obj2.seq
      }),
      /*           eleicaoDados: response.data,
          candidatoDados: response.data.cand.sort(function (obj1, obj2) {
            return obj1.seq - obj2.seq
          }) */ isLoading: false
    })
    /* }) */
    /* .catch(err => console.log(err)) */
  }

  render () {
    const { eleicaoDados, candidatoDados, isLoading } = this.state

    if (isLoading) {
      return <p>Loading...</p>
    }

    let candidatosPrimeiros = []
    let todosCandidatos = []

    candidatoDados.map((candidato, index) => {
      if (eleicaoDados.carper === '5' && index < 4) {
        candidatosPrimeiros.push(candidato)
      } else if (index < 2) {
        candidatosPrimeiros.push(candidato)
      }
    })

    candidatoDados.map(candidato => todosCandidatos.push(candidato))

    return (
      <div>
        {console.log(eleicaoDados.carper)}

        {this.props.senador === true && (
          <ResultadoSenadores
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}

        {this.props.governador === true && (
          <ResultadoGovernadores
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}

        {this.props.presidente === true && (
          <ResultadoPresidente
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}
      </div>
      /*       <div>
        {console.log(eleicaoDados.carper)}

        {eleicaoDados.carper === '5' && (
          <ResultadoSenadores
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}

        {eleicaoDados.carper === '3' && (
          <ResultadoGovernadores
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}

        {eleicaoDados.carper === '1' && (
          <ResultadoPresidente
            candidatos={candidatosPrimeiros}
            eleicaoDados={eleicaoDados}
            todos={todosCandidatos}
            uf={this.props.uf}
          />
        )}
      </div> */
    )
  }
}
