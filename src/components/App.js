import React, { Component } from 'react';
import HeaderPrincipal from './layout/partialHeader';
import Resultados from './resultados';
import Footer from "./layout/partialFooter";
import './styles/main.css';


// Componentes Principais do App

class App extends Component {

  render() {

    return (


      <React.Fragment>

        <HeaderPrincipal />

        <Resultados />

        <Footer />

      </React.Fragment>


    );
  }
}

export default App;
