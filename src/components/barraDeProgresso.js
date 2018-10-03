import React from 'react';
import styled, { css } from 'styled-components';

const Barra = styled.div`
  position: relative;
  height: 15px;
  width: 50%;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 1rem auto;
  ${(props) => props.uf && css`
    width: 100%`}
`

const Preencher = styled.div`
  background: #0095da;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
  ${(props) => props.percentual && css`
    width: ${props.percentual}%`}
`

const BarraDeProgresso = ({ percentual, uf }) => {
  console.log('percentual', Math.round(percentual));
  return (
    <div>
      <Barra uf={uf}>
        <Preencher percentual={Math.round(percentual)} />
      </Barra>
    </div>
  )
}

export default BarraDeProgresso;

