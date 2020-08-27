import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.h1`
  padding: 0 1rem;
  color: #7d7d7d;
  text-align: center;
  font-family: "Staatliches", cursive;
`

const Accent = styled.strong`
  color: #c50aeb;
`

const IndexPage = () => (
  <Layout>
    <Seo title="404" />
    <Title>
      <Accent>404:</Accent> Nothing Here.
    </Title>
  </Layout>
)

export default IndexPage
