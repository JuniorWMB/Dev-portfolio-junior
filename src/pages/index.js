import React from "react"
import "./index.css"
import Layout from "../components/Layout"
import Main from "../components/Main"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <main className="main">
      <Main />
    </main>
  </Layout>
)

export const query = graphql`
  query {
    moi: file(relativePath: { eq: "moi.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    iguane: file(relativePath: { eq: "iguane.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
