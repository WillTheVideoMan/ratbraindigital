import React from "react"
import Normalise from "../styles/Normalise"
import GlobalStyle from "../styles/GlobalStyle"
import { Helmet } from "react-helmet"

const IndexPage = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Normalise />
    <GlobalStyle />
    {children}
  </>
)

export default IndexPage
