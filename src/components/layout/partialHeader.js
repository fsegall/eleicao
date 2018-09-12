import React from 'react';
import styled, { css } from 'styled-components';

// Faz um container para o header principal
export const HeaderContainer = styled.div`
  display: grid;
  padding: 0;
  background-color: #0095da;
  text-align: center;
`

// Texto do header principal
export const Header = styled.h1`
  color: #fff ;
  margin:0.5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;


// Faz uma grid com 27 colunas para cada UF
export const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(26, 1fr);
  grid-gap: 0.3rem;
`;

// Faz o item de cada Estado e indica o que foi selecionado
export const EstadosItem = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
  ${props => props.selecionado && css`
  border-bottom: 0.5rem solid #0095da;
  `}
`;


