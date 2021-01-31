import React, { useState, useEffect } from "react"
import "./portfolioproject.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioProject = () => {
  const [projet, setProjet] = useState([])

  const data = useStaticQuery(graphql`
    query MyFQuery {
      allStrapiProjet {
        nodes {
          created_at
          features
          id
          stack
          title
          picture {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  console.log("data projet", data)

  return (
    <div className="portfolio__contain">
      <div className="portfolio__text">
        <span> Mon portfolio</span>
        <h3>Détail & présentation de mes réalisations</h3>
        <p>
          Rien de mieux qu’un tour d’horizon de mes réalisations pour découvrir
          mon travail.
        </p>
      </div>
      <div className="portfolio__projectview ">
        {data.allStrapiProjet.nodes.map(proj => (
          <div className="portfolioblock">
            <div className="portfolio__img">
              <Img
                fluid={proj.picture.childImageSharp.fluid}
                className="picture__gatsby"
              />
            </div>
            <div className="portfolio__textblock">
              <h3>{proj.title}</h3>
              <div className="portfolio__button">
                <button>{proj.stack}</button>
                <button>{proj.features}</button>
              </div>

              <div className="portfolio__seemyproject">
                <button>Voir le projet</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioProject
