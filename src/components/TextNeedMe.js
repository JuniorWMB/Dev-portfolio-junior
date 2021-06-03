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
        <p>Comment pouvons-nous collaborer ensemble ?</p>
        <h3>Besoin d’un développeur ?</h3>
        <p>
          De la landing page à l’application web en passant par le SaaS, je crée
          des projets web pour des entrepreneurs et entreprises de toutes
          tailles. Découvrir vos projets passionnant et innovant c’est ce qui
          m’inspire au quotidien.
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
