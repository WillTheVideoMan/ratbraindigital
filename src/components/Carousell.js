import React from "react"
import styled from "styled-components"
import { useEmblaCarousel } from "embla-carousel/react"
import { SPACING } from "../styles/constants"

const Wrapper = styled.div`
  overflow: hidden;
  padding: ${SPACING.accent.major};
`
const Container = styled.div`
  display: flex;
`
const Slide = styled.div`
  position: relative;
`

const Carousell = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  })

  return (
    <Wrapper ref={emblaRef}>
      <Container>
        {children
          ? children.map((child, index) => <Slide key={index}>{child}</Slide>)
          : null}
      </Container>
    </Wrapper>
  )
}

export default Carousell
