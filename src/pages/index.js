import React from "react"
import styled from "styled-components"

import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <Image />
    <Title>
      Small Brains. <Accent>Big</Accent> Ideas.
    </Title>
  </Layout>
)

export default IndexPage
