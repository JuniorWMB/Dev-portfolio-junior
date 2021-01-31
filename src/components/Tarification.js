import { Link } from "gatsby"
import React from "react"
import "./tarification.css"

const Tarification = () => {
  return (
    <div className="tarification__contain">
      <div className="tarification__text">
        <h3>Une tarification simple et transparente</h3>
        <p>
          Optez pour un forfait projet complet ou un tarif journalier pour un
          développement spécifique
        </p>
      </div>
      <div className="tarification__price">
        <div className="tarification__pricespec">
          <h5>Développement spécifique</h5>
          <p>à partir de</p>
          <div className="price">
            <span>€</span>
            <h4>300</h4>
            <span>/jours</span>
          </div>
        </div>
        <div className="tarification__pricespec  borderleft">
          <h5>Maintenance & sécurité</h5>
          <p>à partir de</p>
          <div className="price">
            <span>€</span>
            <h4>350</h4>
            <span>/ans</span>
          </div>
        </div>
      </div>
      <div className="tarification__button">
        <Link to="/tarifs/" className="button__color">
          Consulter mes forfaits
        </Link>
        <button className="button__color2">Consulter la FAQ</button>
      </div>
    </div>
  )
}

export default Tarification
