import React from "react"
import "./formulaire.css"

const Formulaire = () => {
  return (
    <div className="formulaire__contain">
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
          action=""
          name="mailchimp"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot field"
          className="formulaire__contain"
        >
          <div className="form__blockone">
            <div className="form__input">
              <label htmlFor="prénom">Prénom</label>
              <input placeholder="Indique ton prénom" />
            </div>
            <div className="form__input">
              <label htmlFor="prénom">Sujet</label>
              <input
                placeholder="Que puis-je faire pour toi ?
              "
              />
            </div>
          </div>
          <div className="form__blocktwo">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Sur quel adresse mail dois-je te répondre ?
              "
            />
            <input type="hidden" name="form-name" value="mailchimp" />
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
            ></textarea>
          </div>
          <div className="form__checkbox">
            <input type="checkbox" name="" id="" />
            <p>J'accepte la politique de confidentialité.</p>
          </div>
          <button className="form__btn" disabled="disabled">
            Envoyer
          </button>
        </form>
      </main>
    </div>
  )
}

export default Formulaire