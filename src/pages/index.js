import React from "react"
import Carousell from "../components/Carousell"
import Card from "../components/Card"
import curve from "../images/ratbraindigital-curve.svg"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import styled from "styled-components"
import { COLOURS, SPACING, TYPOGRAPHY } from "../styles/constants"
import { graphql } from "gatsby"

const Portfolio = styled.div`
  background-color: ${COLOURS.accent};
`

const TopCurve = styled.img`
  margin-bottom: -1px;
  margin-top: -14vw;
`

const BottomCurve = styled.img`
  transform: scaleX(-1) scaleY(-1);
  margin-top: -1px;
`

const TitleContainer = styled.div`
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  font-size: ${TYPOGRAPHY.fontSize.heading.massive};
  line-height: ${TYPOGRAPHY.lineHeight.heading};
  color: ${COLOURS.primary};

  align-self: flex-end;
  text-align: right;
  padding: ${SPACING.accent.minor} ${SPACING.accent.minor} 0 0;
`

const SloganContainer = styled.div`
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  font-size: ${TYPOGRAPHY.fontSize.heading.primary};
  line-height: ${TYPOGRAPHY.lineHeight.heading};
  color: ${COLOURS.primary};

  position: absolute;
  top: calc(14vw + 10rem);
  margin-left: ${SPACING.accent.minor};
`

const BreakWords = styled.div`
  word-spacing: 100vw;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Welcome" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TitleContainer>
          <BreakWords>Rat Brain Digital</BreakWords>
        </TitleContainer>
        <SloganContainer>
          <BreakWords>Digital Marketing.</BreakWords>
          <div>It's That Simple.</div>
        </SloganContainer>
        <TopCurve width="100%" src={curve} />

        <Portfolio>
          <Carousell>
            {data.allAirtable.edges.map(edge =>
              edge.node.data.Project_Name ? (
                <Card
                  title={edge.node.data.Project_Name}
                  fluidImg={
                    edge.node.data.Image.localFiles[0].childImageSharp.fluid
                  }
                />
              ) : null
            )}
          </Carousell>
        </Portfolio>

        <BottomCurve width="100%" src={curve} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query MyQuery {
    allAirtable(filter: { table: { eq: "Portfolio" } }) {
      edges {
        node {
          data {
            Project_Name
            Image {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
