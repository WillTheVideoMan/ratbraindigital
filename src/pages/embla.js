import React from "react"
import styled from "styled-components"
import { useEmblaCarousel } from "embla-carousel/react"

import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Card = styled.div`
  position: relative;
  min-width: 25rem;
  border: 1px solid black;
  padding: 3rem;
`

const CardContainer = styled.div`
  display: flex;
`

const Embla = styled.div`
  overflow: hidden;
`

const Title = styled.h1`
  margin-top: 0;
  padding: 0 1rem;
  color: #808080;
  text-align: center;
  font-family: "Staatliches", cursive;
`

const Accent = styled.strong`
  color: #c50aeb;
`

const IndexPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  })

  return (
    <Layout>
      <Seo title="Welcome" />
      <Embla ref={emblaRef}>
        <CardContainer>
          <Card>SLIDE 1</Card>
          <Card>Slide 2</Card>
          <Card>Slide 3</Card>
        </CardContainer>
      </Embla>
    </Layout>
  )
}

export default IndexPage
