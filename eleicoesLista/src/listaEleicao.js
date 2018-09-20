import React, { Component } from 'react';
import Candidato from './candidato';

export default class ListaEleicao extends Component {

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Filtrar por nome:
          <input
              type="text"
              onChange={this.props.onChange}
            />
            <button type="submit" onSubmit={() => console.log("lista completa")} >Lista Completa</button>
          </label>
        </form>
        <h1
          style={{
            color: "tomato",
            padding: 20,
            marginTop: 20
          }}
        >
          Resultados das Eleições 2018
        </h1>
        <ul className="list-group">
          <Candidato itens={this.props.presidenteBR} />
        </ul>
      </div>
    )
  }
}
