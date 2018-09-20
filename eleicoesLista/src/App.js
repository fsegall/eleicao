import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListaEleicao from './listaEleicao';

//Url's Para o simulado da eleição 2018 - cargo de Presidente

const urlBRpres = 'https://www12.senado.leg.br/_app/apuracao/ag/br/presidente.json';


/* const urlACpres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/ac/ac-c0001-e007555-w.js";
const urlPApres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/pa/pa-c0001-e007555-w.js";
const urlESpres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/es/es-c0001-e007555-w.js";
const urlDFpres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/df/df-c0001-e007555-w.js";
const urlSCpres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/sc/sc-c0001-e007555-w.js";
const urlPRpres = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7555/dadosdivweb/pr/pr-c0001-e007555-w.js";


//Url's Para o simulado da eleição 2018 - cargo de Governador


const urlACgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/ac/ac-c0003-e007557-w.js";
const urlPAgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/pa/pa-c0003-e007557-w.js";
const urlESgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/es/es-c0003-e007557-w.js";
const urlDFgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/df/df-c0003-e007557-w.js";
const urlSCgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/sc/sc-c0003-e007557-w.js";
const urlPRgov = "http://interessados.divulgacao.tse.jus.br/2018/divulgacao/homologacaotre/7557/dadosdivweb/pr/pr-c0003-e007557-w.js"; */


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidenteBR: []
    }
    this.timer = null;
    this.onchange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    this.timer = setInterval(
      this.getListaEleicao, 2000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }


  getListaEleicao = () => {

    axios.get(urlBRpres)
      .then((response) => {
        console.log(response.data.cand);
        console.log('ok');
        this.setState({
          presidenteBR: response.data.cand.sort(function (
            obj1,
            obj2
          ) {
            return obj1.seq - obj2.seq;
          })
        })
      })
      .catch(err => console.log(err));

  }

  onChange = (e) => {
    let updatedList = this.state.presidenteBR.filter(item => item.nm.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )

    this.setState({
      presidenteBR: updatedList
    })
  }

  render() {

    return (
      <ListaEleicao presidenteBR={this.state.presidenteBR} onChange={this.onChange} />
    );
  }
}

export default App;
