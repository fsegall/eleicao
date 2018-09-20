import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BarraSenador from './barraResultadoSenadores';
import Select from 'react-select';

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


// Os Estados
const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];


// As opções para o select do mobile

let options = [];

const selectOptions = Ufs.forEach((uf) =>
  options.push({ value: `${uf}`, label: `${uf}` })
)

console.log('options', options);


// O componente para escolher o Estado

class Estados extends Component {

  state = {
    estados: Ufs,
    selecionado: 'DF'
  }

  onClick = (uf) => {
    console.log('clicked');
    this.setState({
      selecionado: uf
    })
    console.log(this.state);
  }

  /*   onChange = (uf) => {
      this.setState({
        selecionado: uf
      })
    } */

  render() {
    const itensEstado = Ufs.map((uf, key) =>
      <EstadosItem onClick={this.onClick.bind(this, uf)} uf={uf} key={key} selecionado={uf === this.state.selecionado ? true : false}>
        {uf}
      </EstadosItem>
    )
    const state = this.state.selecionado
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
        <BarraSenador uf={state} />
      </React.Fragment>
    )
  }
}

export default Estados;