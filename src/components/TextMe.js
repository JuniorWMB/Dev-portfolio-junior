import React from "react"
import "./textme.css"

const TextMe = () => {
  return (
    <div className="text__master">
      <div className="text__containprincipal">
        <div className="text__contain">
          <div className="text">
            <h2 style={{ color: "#3ae374" }}>
              Création de site web pour particulier et professionnel
            </h2>
            <h2>
              J’accompagne des entrepreneurs et entreprises de toutes tailles
              dans leur transformation digitale en créant des sites web à leur
              image.
            </h2>
          </div>
          <div className="text__picture"></div>
        </div>
        <div className="text__description">
          <p className="textdescription__para">
            Après différentes expériences professionnelles, j'ai décidé de
            revenir à mon amour de toujours: le développement web. Sociable,
            dynamique, curieux et appliqué, j'ai pu acquérir ces dernières
            années de nombreuses connaissances que je souhaite aujourd’hui
            mettre à contribution.
          </p>
          <p className="textdescription__para">
            Mon approche est axée sur une collaboration sur le long terme. Mon
            but étant de vous accompagner dans votre projet d’entreprise et
            d’être un vrai partenaire. Les services que je propose vont de la
            création de site vitrine, E-Commerce ou d’un blog, à la création
            d’une identité visuelle pour votre entreprise ou encore au suivi de
            votre site après la finalisation du projet.
          </p>
          <p className="textdescription__para">
            Ce qui est primordial pour moi, c’est de faire un site qui à votre
            image, dans votre budget mais surtout un site créé avec les
            dernières innovations en matière de développement web pour que
            celui-ci dure dans le temps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TextMe
