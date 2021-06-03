import React from "react"
import Forfait from "./Forfait"
import "./tarifcomponent.css"
import { Link } from "gatsby"

const TarifComponentTitle = () => {
  return (
    <div className="portfolio__contain">
      <div className="portfolio__text">
        <span>Tarifs des prestations</span>
        <h3>Une tarification simple et transparente</h3>
        <p>
          Optez pour un forfait projet complet ou un tarif journalier pour un
          développement spécifique
        </p>
      </div>
      <div className="tarif__call">
        <div className="leftneed">
          <h3>Besoin d’une solution web clé en main ?</h3>
          <p>
            Obtenez un devis rapidement pour estimer les coûts de programmation.
            Réservez votre rendez-vous téléphonique en ligne en seulement
            quelques clics.
          </p>
        </div>
        <div className="rightneed">
          <Link to="/contact/" className="portfolio__btnlink">
            <button>PROGRAMMER UN CALL</button>
          </Link>
        </div>
      </div>
      <Forfait />
    </div>
  )
}

export default TarifComponentTitle
