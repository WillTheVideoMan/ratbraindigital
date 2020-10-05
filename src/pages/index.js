import React from "react"
import Carousell from "../components/Carousell"
import Card from "../components/Card"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <Carousell>
      <Card title="Card" />
      <Card title="Card 1" />
      <Card title="Card 2" />
    </Carousell>
  </Layout>
)

export default IndexPage
