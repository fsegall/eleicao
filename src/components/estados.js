import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// Faz uma grid com 27 colunas para cada UF
export const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(26, 1fr);
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

/* Implementar onClick 
/
onClick = () => {}
/
*/

const itensEstado = Ufs.map((uf, key) =>
  <EstadosItem key={key} selecionado={uf === 'DF' ? true : false}>
    {uf}
  </EstadosItem>
)

class Estados extends Component {
  render() {
    return (

      <NavTabEstados>
        {itensEstado}
      </NavTabEstados>
    )
  }
}

export default Estados;