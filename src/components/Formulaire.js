import React, { useState } from "react"
import "./formulaire.css"

const Formulaire = () => {
  const [userName, setUserName] = useState("")
  const [sujet, setSujet] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disable, setdisable] = useState(false)

  const buttondisable = () => {
    if (userName && sujet && email && message === true) {
      setdisable(true)
    }
  }

  return (
    <div className="formulaire__contain formulaire__master">
      <div className="formulaire__text">
        <span> Contacte-moi</span>
        <h3 style={{ textAlign: "center" }}>
          Brise le plafond de verre et Lance-toi dans l’aventure et donne un
          nouvel élan à ton entreprise
        </h3>
        <p>
          Envie de me présenter un projet, ou tout simplement dire bonjour ?
        </p>
      </div>
      <main className="form__main">
        <form
          action="/success"
          name="PortfolioContact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot field"
          className="formulaire__contain contain__form__respon"
          onSubmit="submit"
        >
          <div className="form__blockone">
            <div className="form__input">
              <label htmlFor="prénom">Prénom</label>
              <input
                placeholder="Indique ton prénom"
                type="text"
                name="prénom"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="form__input">
              <label htmlFor="sujet">Sujet</label>
              <input
                placeholder="Que puis-je faire pour toi ?
              "
                type="text"
                name="sujet"
                onChange={e => setSujet(e.target.value)}
              />
            </div>
          </div>
          <div className="form__blocktwo">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Sur quel adresse mail dois-je te répondre ?
              "
              type="mail"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
            <input type="hidden" name="form-name" value="PortfolioContact" />
            <input type="hidden" name="bot-field" />
          </div>
          <div className="form__blockthree">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id=""
              cols="60"
              rows="10"
              placeholder="Entre ton message
              "
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form__checkbox">
            <input type="checkbox" name="" id="" />
            <p>J'accepte la politique de confidentialité.</p>
          </div>
          <button type="submit" className="form__btn" disabled={disable}>
            Envoyer
          </button>
        </form>
      </main>
    </div>
  )
}

export default Formulaire
