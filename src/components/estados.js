import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BarraSenador from './barraResultadoSenadores';

// Faz uma grid com 27 colunas para cada UF
export const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  grid-gap: 0.3rem;
`;

// Faz o item de cada Estado e indica o que foi selecionado
export const EstadosItem = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
  ${props => props.selecionado && css`
  border-bottom: 0.5rem solid #0095da;
  `}
`;

// Os Estados
const Ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];



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
        <BarraSenador uf={state} />
      </React.Fragment>
    )
  }
}

export default Estados;