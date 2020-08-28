import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle`
  
  :root{
    @media only screen and (min-width: 600px) {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }

`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 40rem;
`

const IndexPage = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  </>
)

export default IndexPage
