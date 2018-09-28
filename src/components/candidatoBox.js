import React, { Component, createContext } from 'react';
import styled, { css } from 'styled-components';
import male from '../img/male-placeholder.png';
import female from '../img/female-placeholder.jpg';


// Container Senadores

const ContainerTextoCandidato = styled.div`
  align-content: space-between;
  display: grid;
  progress {
    justify-self: center;
    margin: 0.4rem 0 1rem 0;
  }
  transition: all 0.3s;
  @media (max-width: 767px){
  text-align: center;
  }
`;

// Subcomponentes

const SenadorQuadroFoto = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;

  span {
    position: absolute;
    
    margin-top: -1.4rem;
    padding: 10px 20px;
    background-color:#d84136;
    color: #fff;
  }

  img {
    
    height: 16rem;
    width: 12rem;
    border: 0.5rem solid #0095da;
    
  }
`;

const NomeCandidato = styled.span`
  color: #484848;
  font-weight: bold;
  display: block;
  transition: all 0.3s;
  @media (max-width: 767px){
  font-size: inherit;
  
  }
`;

const VotosCandidato = styled.span`
  font-size: 0.8rem;
  color: #ccc;
  display: block;
  &::after {
    content:" votos";
  }
`;

const PercentualCandidato = styled.span`
  font-size: 1.5rem;
  color: #484848;
  display: block;
  padding-top: 3rem;
  &::after {
    content:"%";
  }
`;

const PercentualCandidatoSmall = styled.span`
  font-size: 1rem;
  color: #484848;
  display: block;
  padding-top: 3rem;
  &::after {
    content:"%";
  }
`;

const PartidoCandidato = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #ccc;
  display: block;
  transition: all 0.3s;
  @media (max-width: 767px){
  font-size: 0.8rem;
  }
`;

const PartidoCandidatoSmall = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #ccc;
  display: block;
  transition: all 0.3s;
  @media (max-width: 767px){
  font-size: 0.8rem;
  }
`;


// Se o componente tiver a this.props eleitoSenador, renderiza o quadro e a barra de progresso com percentual de votos. Caso eleitoSenador seja 's', renderiza o span 'Eleito'.

class CandidatoBox extends Component {

  render() {
    return (
      <ContainerTextoCandidato>

        {this.props.eleitoSenador && <SenadorQuadroFoto>
          {this.props.eleitoSenador === "s" ? <span>Eleito</span> : ""}
          <img src={this.props.gender === 'male' ? male : female} />

        </SenadorQuadroFoto>}

        <NomeCandidato>
          {this.props.nome}
        </NomeCandidato>

        {this.props.eleitoSenador
          ?
          <PartidoCandidato>
            {this.props.partido}
          </PartidoCandidato>
          :
          <PartidoCandidatoSmall>
            {this.props.partido}
          </PartidoCandidatoSmall>}



        {this.props.eleitoSenador ?
          <PercentualCandidato>
            {this.props.percentual}
          </PercentualCandidato> :
          <PercentualCandidatoSmall>
            {this.props.percentual}
          </PercentualCandidatoSmall>}

        <VotosCandidato>
          {this.props.votos}
        </VotosCandidato>

        {this.props.eleito && this.props.eleitoSenador && <progress value={this.props.percentual} max="100">
        </progress>}

      </ContainerTextoCandidato>
    )
  }
}

export default CandidatoBox;

