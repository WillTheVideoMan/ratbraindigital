import { createGlobalStyle } from "styled-components"
import { COLOURS } from "./constants"

const GlobalStyle = createGlobalStyle`
  
  :root{
    @media only screen and (min-width: 600px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 1920px) {
      font-size: 26px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${COLOURS.background};
  }

`

export default GlobalStyle
