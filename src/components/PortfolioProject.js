import React, { useState, useEffect } from "react"
import "./portfolioproject.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { PopupButton } from "react-calendly"

const PortfolioProject = () => {
  const [projet, setProjet] = useState([])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiWork {
        nodes {
          description
          github
          id
          createdAt
          site
          stack
          strapiId
          picture {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
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

      {/* <PopupButton
        color="#00a2ff"
        text="Click Juniorr"
        textColor="#ffffff"
        data-url="https://calendly.com/junior-wembopa"
        styles={{
          height: "1000px",
        }}
      /> */}
      <div className="portfolio__projectview ">
        {data.allStrapiWork.nodes.map(proj => (
          <div className="portfolioblock">
            <div className="portfolio__img">
              <Img
                fluid={proj.picture.childImageSharp.fluid}
                className="picture__gatsby"
              />
            </div>
            <div className="portfolio__textblock">
              <h3>{proj.site}</h3>
              <div className="portfolio__button">
                <p>{proj.description}</p>
              </div>
              <div className="portfolio__seemyproject">
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
