import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PortfolioProject from "../components/PortfolioProject"

const portfolio = () => {
  return (
    <Layout>
      <PortfolioProject />
    </Layout>
  )
}

export default portfolio
