import React, { Component } from 'react';
import { HeaderContainer, Header } from './layout/partialHeader';
import Estados from './estados.js';
import BarraSenador from './barraResultadoSenadores';
import ResultadoSenadores, { Separador } from './resultadoSenador';
import { ContainerResultados, ResultadoGovernador, ResultadoPresidente } from './resultadoPresidente_Governador';
import Footer from "./layout/partialFooter";


class App extends Component {

  render() {

    return (

      <React.Fragment>

        <HeaderContainer>
          <Header>Eleições 2018 - Resultados</Header>
        </HeaderContainer>

        <Estados />

        <BarraSenador />

        <ResultadoSenadores />

        <Separador />

        <ContainerResultados>

          <ResultadoGovernador />

          <ResultadoPresidente />

        </ContainerResultados>

        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
