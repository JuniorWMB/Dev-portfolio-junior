import React from "react"
import "./mission.css"
import { FcReading } from "react-icons/fc"
import { FcMultipleDevices } from "react-icons/fc"
import { FcFlowChart } from "react-icons/fc"

const Mission = () => {
  return (
    <div className="mission__container">
      <div className="mission__text">
        <div className="mission__icon">
          <FcFlowChart size="50" />
        </div>
        <h3>Ma Mission</h3>
        <p>
          Imaginer, concevoir et programmer des projets web en proposant des
          solutions techniques et automatisées.
        </p>
      </div>
      <div className="mission__text">
        <div className="mission__icon">
          <FcMultipleDevices size="50" />
        </div>
        <h3>Full Remote / Présentiel</h3>
        <p>
          Organisé à distance, on communique et on collabore ensemble. Pout tous
          nos projets, on utilise les méthodes agiles
        </p>
      </div>
      <div className="mission__text textv2">
        <div className="mission__icon">
          <FcReading size="50" />
        </div>
        <h3>Compétences</h3>
        <p>
          Alliant connaissances techniques et expériences acquises, je pratique
          une veille technologique constante pour rester informé et à jour sur
          les nouveautés.
        </p>
      </div>
    </div>
  )
}

export default Mission
