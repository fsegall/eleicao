import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const CandidatosListaContainer = styled.div`
  background-color: #0095da;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  border-radius: 0.3rem;
  .title_collapse {
    padding: 1rem;
    display: inline-block;
  }
  ${(props) => props.open && css`
    padding: 0;`}
`;

const CandidatosLista = styled.ul`
  list-style-type: none;
  padding: 0;
  margin:0;
  li {
    display: none;
  }
  ${(props) => props.open && css`
      li {
      color: #484848;
      border: 1px solid #ccc;
      padding: 20px;
      height: 100%;
      background-color: #fff;
      display: block;
    }`
  }`

export default class OutrosCandidatos extends Component {
  state = {
    open: false
  }

  onClick(e) {
    console.log(e);
    this.setState(
      {
        open: !this.state.open
      }
    )
    console.log(this.state.open);
  }

  render() {
    return (

      <CandidatosListaContainer onClick={(e) => this.onClick(e)} open={this.state.open}>
        <span className="title_collapse">Demais Candidatos</span>
        <CandidatosLista open={this.state.open}>
          <li>
            João Silva
          </li>
          <li>
            José Silva
          </li>
          <li>
            Maria Souza
          </li>
        </CandidatosLista>
      </CandidatosListaContainer>
    )
  }
} 
