import React from 'react';
import { NomeSenador, PartidoSenador, PercentualSenador, VotosSenador } from './resultadoSenador';


const CandidatoBox = (props) => {
  return (

    <React.Fragment>
      <div>
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
      </div>
    </React.Fragment>

  )
}

export default CandidatoBox;