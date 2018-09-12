import React, { Component } from 'react';
import { EstadosItem } from './layout/partialHeader';
import { NavTabEstados } from './layout/partialHeader';

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