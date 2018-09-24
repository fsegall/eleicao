import React, { Component, createContext } from 'react';
import styled from 'styled-components';
import male from '../img/male-placeholder.png';
import female from '../img/female-placeholder.jpg';


// Container Senadores

const ContainerSenador = styled.div`
  align-content: space-between;
  display: grid;
  progress {
    justify-self: center;
  }
`;

// Subcomponentes

const SenadorQuadroFoto = styled.div`
${'' /*   height: 16rem;
  width: 12rem;
  border: 0.5rem solid #0095da; */}
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
  font-size: 1.5rem;
  color: #484848;
  font-weight: bold;
  display: block;
`;

const VotosCandidato = styled.span`
  font-size: 0.8rem;
  color: #484848;
  display: block;
  &::after {
    content:" votos";
  }
`;

const PercentualCandidato = styled.span`
  font-size: 2rem;
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
`;


// Se o componente tiver a this.props eleitoSenador, renderiza o quadro e a barra de progresso com percentual de votos. Caso eleitoSenador seja 'sim', renderiza o span 'Eleito'.

class CandidatoBox extends Component {

  render() {
    return (
      <ContainerSenador>
        {/* <img src="./img/male-placeholder.png" /> */}

        {this.props.eleitoSenador && <SenadorQuadroFoto>
          {this.props.eleitoSenador === "s" ? <span>Eleito</span> : ""}
          <img src={this.props.gender === 'male' ? male : female} />

        </SenadorQuadroFoto>}

        <NomeCandidato>
          {this.props.nome}
        </NomeCandidato>
        <PartidoCandidato>
          {this.props.partido}
        </PartidoCandidato>
        <PercentualCandidato>
          {this.props.percentual}
        </PercentualCandidato>
        <VotosCandidato>
          {this.props.votos}
        </VotosCandidato>

        {this.props.eleito && this.props.eleitoSenador && <progress value={this.props.percentual} max="100">
        </progress>}

      </ContainerSenador>
    )
  }
}

export default CandidatoBox;

