import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Select from 'react-select'
import { construirUrls } from '../urlsEleicao'
import ResultadoPorCargo from './resultadoPorCargo'
import { Separador } from './layout/separador'

// Bloco de resultados para Governador e Presidente

const ContainerResultados = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1025px) {
    display: block;
    text-align: center;
  }
`

// Os Estados

const Ufs = [
  'BR',
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO'
]

const UrlSenadores = construirUrls('0005', '297')
const UrlGovernadores = construirUrls('0003', '297')
const UrlPresidente = construirUrls('0001', '295')

/* console.log('Senadores ulrs', UrlSenadores);

Ufs.forEach((uf) => {
  const ufKey = uf.toLowerCase();

  UrlSenadores[ufkey]
}) */

// Faz uma grid com 27 colunas para cada UF
const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  grid-gap: 0.3rem;
  @media (max-width: 736px) {
    display: none;
  }
`

// Faz o item de cada Estado e indica o que foi selecionado
const EstadosItem = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
  ${props =>
    props.selecionado &&
    css`
      border-bottom: 0.5rem solid #0095da;
    `}
`

const EscolhaEstadoMobile = styled.div`
  display: none;
  @media (max-width: 736px) {
    padding-top: 1rem;
    display: block;
  }
`

// As opções para o select do mobile

let options = []

Ufs.forEach(uf => options.push({ value: `${uf}`, label: `${uf}` }))

// O componente para escolher o Estado

class Resultados extends Component {
  state = {
    selecionado: 'DF'
  }

  onClick = uf => {
    console.log('clicked')
    this.setState({
      selecionado: uf
    })
    console.log(this.state)
  }

  render () {
    const itensEstado = Ufs.map((uf, key) => (
      <EstadosItem
        onClick={this.onClick.bind(this, uf)}
        uf={uf}
        key={key}
        selecionado={uf === this.state.selecionado}
      >
        {uf}
      </EstadosItem>
    ))

    const estadoSelecionado = this.state.selecionado.toLowerCase()

    console.log('url Brasil', UrlPresidente[estadoSelecionado])

    if (estadoSelecionado == 'br') {
      return (
        <React.Fragment>
          <NavTabEstados>{itensEstado}</NavTabEstados>
          <EscolhaEstadoMobile>
            <Select
              options={options}
              placeholder='Escolha o Estado'
              onChange={e => {
                console.log(e)
                this.setState({
                  selecionado: e.value
                })
              }}
            />
          </EscolhaEstadoMobile>

          {/* <BarraSenador uf={this.state.selecionado} /> */}

          {/* <BarraSenador uf={props.uf} eleicaoDados={props.eleicaoDados} /> */}

          <ResultadoPorCargo
            url={
              'https://www12.senado.leg.br/_app/apuracao/ag/br/presidente.json'
            }
            uf={estadoSelecionado}
          />

          <Separador />
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <NavTabEstados>{itensEstado}</NavTabEstados>
        <EscolhaEstadoMobile>
          <Select
            options={options}
            placeholder='Escolha o Estado'
            onChange={e => {
              console.log(e)
              this.setState({
                selecionado: e.value
              })
            }}
          />
        </EscolhaEstadoMobile>

        <ResultadoPorCargo
          url={UrlSenadores[estadoSelecionado]}
          uf={this.state.selecionado}
          senador
        />

        <Separador />

        <ContainerResultados>
          <ResultadoPorCargo
            url={UrlGovernadores[estadoSelecionado]}
            uf={estadoSelecionado}
            governador
          />

          <ResultadoPorCargo
            url={UrlPresidente[estadoSelecionado]}
            uf={estadoSelecionado}
            presidente
          />
        </ContainerResultados>
      </React.Fragment>
    )
  }
}

export default Resultados
