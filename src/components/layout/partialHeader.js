import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  ${'' /* box-sizing: border-box; */}
  display: grid;
  padding: 0;
  background-color: #0095da;
  text-align: center;
`

export const Header = styled.h1`
  color: #fff ;
  margin:0.5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  `;

export const NavTabEstados = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(26, 1fr);
  grid-gap: 0.3rem;
`;

export const EstadosItem = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
`;

export const EstadosItemSelected = styled.div`
  color: #5b5b5b;
  padding: 0.3rem;
  border-bottom: 0.5rem solid #0095da;
`;


