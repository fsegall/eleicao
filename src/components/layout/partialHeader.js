import React from 'react';
import styled, { css } from 'styled-components';

// Faz um container para o header principal
const HeaderContainer = styled.div`
  display: grid;
  padding: 0;
  background-color: #0095da;
  text-align: center;
`

// Texto do header principal
const Header = styled.h1`
  color: #fff ;
  margin:0.5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;

const HeaderPrincipal = () => {
  return (
    <HeaderContainer>
      <Header>Eleições 2018 - Resultados</Header>
    </HeaderContainer>
  )
}

export default HeaderPrincipal;


