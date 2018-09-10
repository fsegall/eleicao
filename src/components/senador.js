import React from 'react';
import { SenadorQuadroFoto, NomeSenador, PartidoSenador, PercentualSenador, VotosSenador } from './resultadoSenador';

const SenadorBox = (props) => {
  return (
    <div>

      <SenadorQuadroFoto>
        {props.eleito === "sim" ? <span>Eleito</span> : ""}
      </SenadorQuadroFoto>
      <NomeSenador>
        {props.nome}
      </NomeSenador>
      <PartidoSenador>
        {props.partido}
      </PartidoSenador>
      <PercentualSenador>
        {props.percentual}
      </PercentualSenador>
      <VotosSenador>
        {props.votos}
      </VotosSenador>
      <progress value={props.percentual} max="100">
      </progress>

    </div>
  )
}

export default SenadorBox;
