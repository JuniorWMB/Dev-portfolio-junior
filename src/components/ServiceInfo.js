import React from "react"
import "./serviceinfo.css"
import { BsCodeSlash } from "react-icons/bs"
import { RiKakaoTalkFill } from "react-icons/ri"
import { FaPaintBrush } from "react-icons/fa"
import { Link } from "gatsby"

const ServiceInfo = () => {
  return (
    <div className="service__contain">
      <div className="service__text">
        <span>Prestation de services</span>
        <h3>Développeur web front-end</h3>
        <p>
          Ma mission est de vous proposer des solutions techniques et
          automatisées et de vous accompagner dans votre création de site web.
        </p>
      </div>
      <div className="service__block">
        <div className="service__blocktext">
          <p>Faisons un peu le tour de mes services</p>
          <h3>Comment pouvons-nous collaborer ?</h3>
        </div>
        <div className="service__blockspec">
          <div className="service__blockrow">
            <div className="service__icon">
              <FaPaintBrush size={40} />
            </div>
            <h3>Intégration Web</h3>
            <p>
              Développement et intégration d’une maquette graphique pour la
              convertir en un projet web conforme à votre cahier des charges. Je
              porte une attention toute particulière à l’expérience utilisateur
              qui est pour moi primordial.
            </p>
          </div>
          <div className="service__blockrow">
            <div className="service__icon">
              <BsCodeSlash size={40} />
            </div>

            <h3>Développement</h3>
            <p>
              Programmation ponctuelle et spécifique pour améliorer, poursuivre
              ou convertir un projet existant dans le cadre d’une mission
              définie. Seul ou au sein d’une équipe, je m’adapte à vos besoins
              et m’intègre facilement à vos équipes.
            </p>
          </div>
          <div className="service__blockrow">
            <div className="service__icon">
              <RiKakaoTalkFill size={40} />
            </div>
            <h3>Boire un café</h3>
            <p>
              Toi aussi tu as un mug qui déchire ? Prenons le temps d’échanger
              ensemble ! Repars avec plein de conseils, des infos ou même une
              ligne directrice pour mieux structurer ton projet.
            </p>
          </div>
        </div>
        <div className="btn__tariffree">
          <Link to="/tarifs/" className="btn__tariffreebis">
            Consulter mes tarifs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
