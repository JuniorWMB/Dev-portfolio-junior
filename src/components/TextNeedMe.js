import React from "react"
import "./textneedme.css"
import { FcCheckmark } from "react-icons/fc"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const TextNeedMe = () => {
  const data = useStaticQuery(graphql`
    query {
      moi: file(relativePath: { eq: "moi.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="text__needme">
      <div className="text__needmeleft">
        <p>Que pourrions-nous faire ensemble ?</p>
        <h3>Besoin d'intégrer un développeur ?</h3>
        <p>
          Je développe des projets web, quelles que soient leurs dimensions, de
          la landing page à l’application web en passant par le SaaS, pour des
          petites et moyennes entreprises. J’ai une aspiration certaine pour les
          projets entrepreneuriaux innovants, et les méthodes agiles.
        </p>
        <div className="text__needmelog">
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span>ReactJS</span>
          </div>
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span> Redux </span>
          </div>
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span>Gatsby </span>
          </div>
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span>GSAP </span>
          </div>
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span>Material UI </span>
          </div>
          <div className="text__needmespeci">
            <FcCheckmark size={30} />
            <span>Strapi</span>
          </div>
          <Link to="/services/" className="btn__text">
            <button>En savoir plus</button>
          </Link>
        </div>
      </div>
      <div className="text__needmeright">
        <Img className="text__picture" fluid={data.moi.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default TextNeedMe
