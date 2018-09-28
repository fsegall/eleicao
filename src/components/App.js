import React, { Component } from 'react';
import HeaderPrincipal from './layout/partialHeader';
import Estados from './estados.js';
import ResultadoSenadores from './resultadoSenadores';
import { Separador } from './layout/separador';
import { ContainerResultados, ResultadoGovernador, ResultadoPresidente } from './resultadoPresidente_Governador';
import Footer from "./layout/partialFooter";
import './styles/main.css';


// Componentes Principais do App

class App extends Component {

  render() {

    return (


      <React.Fragment>

        <HeaderPrincipal />

        <Estados />

        {/* <ResultadoSenadores /> */}

        {/*         <Separador />

        <ContainerResultados >

          <ResultadoGovernador />

          <ResultadoPresidente />

        </ContainerResultados>
 */}
        <Footer />

      </React.Fragment>


    );
  }
}

export default App;
