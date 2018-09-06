import React, { Component } from 'react';
import { HeaderContainer, Header, NavTabEstados } from './layout/partialHeader';
import Estados from './estados.js';
import { BarraContainer, EstadoSelecionado, SenadorVotos, Divisor } from './barraResultadoSenadores';
import DemaisCandidatos from './demaisCandidatos';

import styled from 'styled-components';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer>
          <Header>Eleições 2018 - Resultados</Header>
        </HeaderContainer>
        <Estados />
        <BarraContainer>
          <EstadoSelecionado>
            DF
          </EstadoSelecionado>

          <SenadorVotos>
            <span>Senador</span>
            1.895.697 eleitores
          </SenadorVotos>
          <Divisor />
        </BarraContainer>
        {/* <DemaisCandidatos /> */}
      </React.Fragment>
    );
  }
}

export default App;
