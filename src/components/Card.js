import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { SPACING, COLOURS, TYPOGRAPHY } from "../styles/constants"

const CardImg = styled(Img)`
  height: 12rem;
  border-radius: ${SPACING.main.major};
  box-shadow: 0rem 0rem ${SPACING.accent.major} -${SPACING.accent.minor} ${COLOURS.background};
`

const Container = styled.div`
  width: 15rem;
  max-width: calc(100vw - ${SPACING.accent.major} - ${SPACING.accent.major});
  padding-right: ${SPACING.accent.major};
`

const Title = styled.div`
  line-height: ${TYPOGRAPHY.lineHeight.heading};
  font-size: ${TYPOGRAPHY.fontSize.heading.tertiary};
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  color: ${COLOURS.primary};
  margin-top: ${SPACING.accent.minor};
  text-align: center;
`

const Card = ({ title, fluidImg }) => {
  return (
    <Container>
      <CardImg fluid={fluidImg} />
      <Title>{title}</Title>
    </Container>
  )
}

export default Card
