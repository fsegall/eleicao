import React, { Component } from 'react';
import HeaderPrincipal from './layout/partialHeader';
import Resultados from './resultados';
import Footer from "./layout/partialFooter";
import './styles/main.css';
import OutrosCandidatos from './outrosCandidatos';


// Componentes Principais do App

class App extends Component {

  render() {

    return (


      <React.Fragment>

        <HeaderPrincipal />

        <Resultados />

        <OutrosCandidatos />

        <Footer />

      </React.Fragment>


    );
  }
}

export default App;
