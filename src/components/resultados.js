import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BarraSenador from './barraResultadoSenadores';
import Select from 'react-select';
import { construirUrls } from '../urlsEleicao';
import ResultadoSenadores from './senadoresResultado';
import ResultadoGovernadores from './governadoresResultado';
import ResultadoPresidente from './presidenteResultado';
import { Separador } from './layout/separador';


// Bloco de resultados para Governador e Presidente

const ContainerResultados = styled.div`
  place-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr;
  grid-gap: 2rem;

  @media (max-width: 1025px) {
    display: block;
    text-align: center;
  }
`;


// Os Estados

const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const UrlSenadores = construirUrls('senador');
const UrlGovernadores = construirUrls('governador');
const UrlPresidente = construirUrls('presidente');

console.log('here', UrlSenadores);

// Faz uma grid com 27 colunas para cada UF
const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  grid-gap: 0.3rem;
  @media (max-width: 736px) {
    display: none;
  }
`;

// Faz o item de cada Estado e indica o que foi selecionado
const EstadosItem = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
  ${props => props.selecionado && css`
  border-bottom: 0.5rem solid #0095da;
  `}
`;

const EscolhaEstadoMobile = styled.div`
  display: none;
  @media (max-width: 736px) {
    padding-top: 1rem;
    display: block;
  }
`;

// As opções para o select do mobile

let options = [];

const selectOptions = Ufs.forEach((uf) =>
  options.push({ value: `${uf}`, label: `${uf}` })
)

console.log('options', options);


// O componente para escolher o Estado

class Resultados extends Component {

  state = {
    /* estados: Ufs, */
    selecionado: 'DF'
  }

  onClick = (uf) => {
    console.log('clicked');
    this.setState({
      selecionado: uf
    })
    console.log(this.state);
  }

  render() {

    const itensEstado = Ufs.map((uf, key) =>
      <EstadosItem onClick={this.onClick.bind(this, uf)} uf={uf} key={key} selecionado={uf === this.state.selecionado ? true : false}>
        {uf}
      </EstadosItem>
    )

    const estadoSelecionado = this.state.selecionado.toLowerCase();

    console.log('aqui', UrlSenadores);

    return (
      <React.Fragment>
        <NavTabEstados >
          {itensEstado}
        </NavTabEstados>
        <EscolhaEstadoMobile>
          <Select options={options} placeholder='Escolha o Estado' onChange={(e) => {
            console.log(e);
            this.setState({
              selecionado: e.value
            })
          }} />
        </EscolhaEstadoMobile>

        <BarraSenador uf={this.state.selecionado} />

        <ResultadoSenadores url={UrlSenadores[estadoSelecionado]} />

        <Separador />

        <ContainerResultados>

          <ResultadoGovernadores url={UrlGovernadores[estadoSelecionado]} />

          <ResultadoPresidente url={UrlPresidente[estadoSelecionado]} />

        </ContainerResultados>

      </React.Fragment>
    )
  }
}

export default Resultados;