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
  border-bottom: 0.5rem solid #0095da;

  > span {
    display: block;
    font-size: 3rem;
  }
`
const UrnasVotos = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #484848;
  font-size: 0.6rem;
  > span {
    margin-right: 0.6rem;
  }
  > p {
    margin-right: 1rem;
  }
  letter-spacing: 0.1rem;
  border-bottom: 0.5rem solid #0095da;
  

  > span {
    display: block;
    font-size: 3rem;
  }
`

// Componente Completo

const BarraSenador = () => {

  return (

    <BarraContainer>
      <EstadoSelecionado>
        DF
      </EstadoSelecionado>

      <SenadorVotos>
        <span>Senador</span>
        <p>1.895.697 eleitores</p>
      </SenadorVotos>
      <UrnasVotos>
        <span>100,00%</span>
        <p>Urnas Apuradas</p>
      </UrnasVotos>
    </BarraContainer>

  )
}

export default BarraSenador;