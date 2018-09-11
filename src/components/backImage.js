import React from 'react';
import styled from 'styled-components';
import image from '../img/ulysses.jpg';

const ImageContainer = styled.div`
  > img {
    background-size: cover;
    max-height: 300px;
    background-repeat: no-repeat;
    width:100%;
    margin-top: 3rem;
  }

`;

const ImageBack = () => {
  return (
    <ImageContainer>
      <img src={image} />
    </ImageContainer>
  )
}

export default ImageBack;

