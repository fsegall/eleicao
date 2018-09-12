import React from 'react';
import styled from 'styled-components';


const SenadorQuadroFoto = styled.div`
  height: 16rem;
  width: 12rem;
  border: 0.5rem solid #0095da;
  margin-bottom: 0.5rem;
  
  > span {
    position: relative;
    top: -0.8rem;
    align-self: top;
    padding: 10px 20px;
    background-color:#d84136;
    color: #fff;
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


// Se o componente tiver a props eleitoSenador, renderiza o quadro e a barra de progresso com percentual de votos. Caso eleitoSenador seja 'sim', renderiza o span 'Eleito'.

const CandidatoBox = (props) => {
  return (
    <div>
      {/* <img src="./img/male-placeholder.png" /> */}

      {props.eleitoSenador && <SenadorQuadroFoto>
        {props.eleitoSenador === "sim" ? <span>Eleito</span> : ""}
      </SenadorQuadroFoto>}

      <NomeCandidato>
        {props.nome}
      </NomeCandidato>
      <PartidoCandidato>
        {props.partido}
      </PartidoCandidato>
      <PercentualCandidato>
        {props.percentual}
      </PercentualCandidato>
      <VotosCandidato>
        {props.votos}
      </VotosCandidato>


      {props.eleitoSenador && <progress value={props.percentual} max="100">
      </progress>}

    </div>
  )
}

export default CandidatoBox;

