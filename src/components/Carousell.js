import React from "react"
import styled from "styled-components"
import { useEmblaCarousel } from "embla-carousel/react"
import { SPACING } from "../styles/constants"

const Wrapper = styled.div`
  overflow: hidden;
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
        {children.map(child => (
          <Slide>{child}</Slide>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Carousell
