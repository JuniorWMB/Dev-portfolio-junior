import React, { useState, useEffect } from "react"
import "./portfolioproject.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioProject = () => {
  const [projet, setProjet] = useState([])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiWork {
        nodes {
          description
          id
          created_at(fromNow: false)
          strapiId
          title
          undertitle
          tala {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

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
        {data.allStrapiWork.nodes.map(proj => (
          <div className="portfolioblock">
            <div className="portfolio__img">
              <Img
                fluid={proj.tala.childImageSharp.fluid}
                className="picture__gatsby"
              />
            </div>
            <div className="portfolio__textblock">
              <h3>{proj.title}</h3>
              <div className="portfolio__button">
                <p>{proj.undertitle}</p>
                <p>{proj.description}</p>
              </div>
              <div className="portfolio__seemyproject">
                <button>
                  <a href={proj.site} target="_blank" rel="noopener noreferrer">
                    Voir le projet{" "}
                  </a>
                </button>
                <button>Voir le github</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioProject
