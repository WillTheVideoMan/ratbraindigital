import React from "react"
import { createGlobalStyle } from "styled-components"
import Normalise from "../styles/Normalise"
import { Helmet } from "react-helmet"

const LayoutStyle = createGlobalStyle`
  
  :root{
    @media only screen and (min-width: 600px) {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    /*background-color: black;*/
  }

`

const IndexPage = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Normalise />
    <LayoutStyle />
    {children}
  </>
)

export default IndexPage
