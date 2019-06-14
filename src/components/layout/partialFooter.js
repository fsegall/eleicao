import React from 'react'
import styled from 'styled-components'
import image from '../../img/ulysses.jpg'

// Banner do footer

const FooterContainer = styled.div`
  height: 100px;
  background-color: #ccc;
  width: 100%;
  margin-top: 3rem;
  p {
    color: #484848;
    text-align: center;
    padding: 3rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>2018&copy; - Built with ReactJS by Felipe. :)</p>
    </FooterContainer>
  )
}

export default Footer
