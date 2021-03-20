import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./project.css"

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      iguane: file(relativePath: { eq: "iguane.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="project__contain">
      <div className="project__containleft">
        <div className="project__containtext">
          <h3>Découvrez mon projet</h3>
          <p>
            Consultez mon portfolio et découvrez l’ensemble de mes réalisations.
          </p>
        </div>
        <div className="project__containpicture">
          <Img
            className="text__picturebis"
            fluid={data.iguane.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="project__containright">
        <div className="project__utils"></div>
        <div className="project__titresubject">
          <h3>Iguane Transport e-commerce</h3>
          <p>
            L’entreprise me confie la réalisation de son identité graphique de A
            à Z et propulse son site web en ligne. Ce projet comprend le design
            de l'interface, l'intégration, et la réalisation des différents
            supports de communication.
          </p>
          <Link to="/portfolio/" className="project__reference">
            <button>Consulter mes réferences</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
