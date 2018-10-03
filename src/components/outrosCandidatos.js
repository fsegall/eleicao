import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const CandidatosListaContainer = styled.div`
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1); 
  margin: 1rem auto;
  background-color: #0095da;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  border-radius: 0.3rem;
  .title_collapse {
    padding: 0.5rem;
    display: inline-block;
  }
  ${(props) => props.open && css`
    padding: 0;`}
`;

const CandidatosLista = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    display: none;
  }
  ${(props) => props.open && css`
    li {
      color: #484848;
      font-size: 1rem;
      border: 1px solid #f4f4f4;
      padding: 20px;
      height: 100%;
      background-color: #fff;
      display: block;
    }
    li:hover {
      background-color: #f4f4f4;
    }
    
    `

  }`

export default class OutrosCandidatos extends Component {

  state = {
    open: false,
    loading: false
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
  }

  componentWillReceiveProps = () => {
    this.setState({ isLoading: false });
  }

  onClick = (e) => {
    console.log(e);
    this.setState(
      {
        open: !this.state.open
      }
    )
    console.log(this.state.open);
  }


  render() {

    const { todos } = this.props;
    const { isLoading } = this.state;
    console.log(todos);

    if (isLoading) {
      return (
        <CandidatosListaContainer onClick={(e) => this.onClick(e)} open={this.state.open}>
          <span className="title_collapse">Demais Candidatos</span>
          <CandidatosLista open={this.state.open}>
            <li>Loading...</li>
          </CandidatosLista>
        </CandidatosListaContainer>
      )
    }

    const todosCandidatos = todos.map((candidato, index) => {

      return (
        <li key={index}>
          {`O candidato ${candidato.nm} do partido ${candidato.cc} tem ${candidato.v} votos e ${candidato.e == "s" ? "" : "não"} está eleito em ${candidato.seq} lugar com o estatus da candidatura considerada como ${candidato.dsit} pelo TSE.`}
        </li>
      );
    });

    return (
      <CandidatosListaContainer onClick={(e) => this.onClick(e)} open={this.state.open}>
        <span className="title_collapse">Demais Candidatos</span>
        <CandidatosLista open={this.state.open}>
          {todosCandidatos}
        </CandidatosLista>
      </CandidatosListaContainer>
    );
  }
}
