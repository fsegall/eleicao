import React from 'react';
import { NomeSenador, PartidoSenador, PercentualSenador, VotosSenador } from './resultadoSenador';
import { QuadroPresGov } from './resultadoPresidente_Governador';


const CandidatoBox = (props) => {
  return (

    <React.Fragment>
      <QuadroPresGov />

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