import React from 'react';
import styled from 'styled-components';

//
// Padrão Usado no Arquivo
// Container
// Subcomponentes
// Componentes Completos
// 

//Containers de Grid

const BarraContainer = styled.div`
  display: flex;
  margin: 2rem 0 2rem 0;
  flex-wrap: wrap;
  progress {
    width: 100%;
    margin-top: 0.8rem;
  }
`
// Subcomponentes

const EstadoSelecionado = styled.div`
  border: 1px solid #ccc;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  font-size: 3rem;
  color: #484848;
`
const SenadorVotos = styled.div`
  color: #484848;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  flex-grow: 1;
  display: inline-block;

  span {
    font-size: 1rem;
  }

  div.eleitores {
    display: inline-block;
  }
  div.urnas {
    text-align: right;
    float: right;
  }
`
// Componente Completo

const BarraSenador = ({ uf }) => {

  return (

    <BarraContainer>

      <EstadoSelecionado>
        {uf}
      </EstadoSelecionado>

      <SenadorVotos>

        <div className="eleitores">
          <h1>Senador</h1>
          <span>1.895.697</span>
        </div>

        <div className="urnas">
          <h1>Urnas Apuradas</h1>
          <span>100,00%</span>
        </div>

        <progress value="100" max="100"></progress>

      </SenadorVotos>

    </BarraContainer>



  )
}

export default BarraSenador;