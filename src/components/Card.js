import React from "react"
import styled from "styled-components"
import { SPACING } from "../styles/constants"

const Container = styled.div`
  width: 16rem;
  height: 16rem;
  max-width: calc(100vw - ${SPACING.accent.major} - ${SPACING.accent.major});
  max-height: calc(100vw - ${SPACING.accent.major} - ${SPACING.accent.major});
  border: 1px solid black;
  margin-left: ${SPACING.accent.major};
`

const Card = ({ title, image }) => {
  return <Container>{title}</Container>
}

export default Card
