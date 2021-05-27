import { Link } from "gatsby"
import React, { useState } from "react"
import { FcShop } from "react-icons/fc"
import { FcFrame } from "react-icons/fc"
import { FcCheckmark } from "react-icons/fc"
import { FcLeft } from "react-icons/fc"
import { FcRight } from "react-icons/fc"

import "./forfait.css"

const Forfait = () => {
  //   const [toggleTabs, setToggleTabs] = useState(1)
  // const [viewVitrine, setViewVitrine] = useState(true)
  const [toggleTabs, setToggleTabs] = useState(1)
  const toggleTab = index => {
    setToggleTabs(index)
  }

  return (
    <div className="forfait__contain">
      <div className="forfait__blockchoice">
        <div
          className={toggleTabs === 1 ? "forfait__color" : "none__color"}
          onClick={() => toggleTab(1)}
        >
          <FcFrame size={50} />
          <h3>Site Vitrine</h3>
        </div>
        <div
          className={toggleTabs === 2 ? "forfait__color" : "none__color"}
          onClick={() => toggleTab(2)}
        >
          <FcShop size={50} />
          <h3>Site E-Commerce</h3>
        </div>
      </div>

      <div className="forfait__multiforfait">
        <div className={toggleTabs === 1 ? "forfait__vitrineblock" : "contenu"}>
          <div className="forfait__textvitrine">
            <FcRight size={40} className="hiddenresponsive" />
            <p>Forfaits, création de site web vitrine, clé en main</p>
            <FcLeft size={40} className="hiddenresponsive" />
          </div>
          <div className="forfait__vitrine">
            <div className="forfait__priceblock">
              <div className="forfait__vitrineprice">
                <h3>Landing page</h3>
                <div className="price__forfait">
                  <span>€</span>
                  <h4>550</h4>
                  <span>/ht</span>
                </div>
                <p>
                  Page unique au trafic ciblé. Ici, on va droit au but et on se
                  focalise sur la génération du business.
                </p>
              </div>
              <div className="trait">
                <div></div>
              </div>
              <div className="include">
                <p>Inclus dans ce forfait:</p>
                <p className="center">
                  <FcCheckmark />
                  Charte graphique sur mesure
                </p>
                <p className="center">
                  <FcCheckmark />
                  Développement sur mesure
                </p>
                <p className="center">
                  <FcCheckmark />
                  Création, intégration de visuels
                </p>
                <p className="center">
                  <FcCheckmark />
                  Adaptation full responsive
                </p>
                <p className="center">
                  <FcCheckmark />
                  Formulaire de contact intelligent
                </p>
                <p className="center">
                  <FcCheckmark />
                  Optimisation du référencement
                </p>
                <p className="center">
                  <FcCheckmark />
                  Statistiques des visites et du trafic
                </p>
                <p className="center">
                  <FcCheckmark />
                  Mise en ligne, coaching, suivi sur 3 mois
                </p>
              </div>
              <Link to="/contact/" className="forfait__vitrinebutton link">
                <button className="linkvtwo">Commencer</button>
              </Link>
            </div>

            <div className="forfait__vitrineblock">
              <div className="forfait__priceblock">
                <div className="forfait__vitrineprice">
                  <h3>Site vitrine essentiel</h3>
                  <div className="price__forfait">
                    <span>€</span>
                    <h4>999</h4>
                    <span>/ht</span>
                  </div>
                  <p>
                    On va à l’essentiel en s’appuyant sur un outil de gestion de
                    contenu et un graphisme emballant et agréable.
                  </p>
                </div>
                <div className="trait">
                  <div></div>
                </div>
                <div className="include">
                  <p>Inclus dans ce forfait:</p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation graphique
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en place du contenu
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Interface d'administration standard
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation full responsive
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Formulaire de contact personnalisé
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Optimisation du référencement
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Statistiques des visites et du trafic
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en ligne, coaching, formation
                  </p>
                </div>
                <Link to="/contact/" className="forfait__vitrinebutton link">
                  <button className="linkvtwo">Commencer</button>
                </Link>
              </div>
            </div>
            <div className="forfait__vitrineblock">
              <div className="forfait__priceblock">
                <div className="forfait__vitrineprice last">
                  <h3>Site vitrine professionnel</h3>
                  <div className="price__forfait">
                    <span>€</span>
                    <h4>1500</h4>
                    <span>/ht</span>
                  </div>
                  <p>
                    Design & développement entièrement personnalisé crée en
                    utilisant les dernières technologies .
                  </p>
                </div>
                <div className="trait">
                  <div></div>
                </div>
                <div className="include">
                  <p>Inclus dans ce forfait:</p>
                  <p className="center">
                    <FcCheckmark />
                    Charte graphique sur mesure
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en place du contenu
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Interface d'administration pro
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation full responsive
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Formulaire de contact intelligent
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Optimisation du référencement
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Statistiques des visites et du trafic
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en ligne, coaching, formation
                  </p>
                </div>
                <div className="forfait__vitrinedescription"></div>
                <Link to="/contact/" className="forfait__vitrinebutton link">
                  <button className="linkvtwo">Commencer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleTabs === 2 ? "forfait__textcommerce" : "contenu"}>
          <div className="forfait__textvitrine vitrinebis">
            <FcRight size={40} className="hiddenresponsive" />
            <p>Forfaits, création de site web E-commerce, clé en main</p>
            <FcLeft size={40} className="hiddenresponsive" />
          </div>
          <div className="forfait__vitrineblock"></div>
          <div className="forfait__multiforfait center__vitrine">
            <div className="forfait__vitrine center__vitrinetwo">
              <div className="forfait__priceblock resp__price">
                <div className="forfait__vitrineprice">
                  <h3>Web store essentiel</h3>
                  <div className="price__forfait">
                    <span>€</span>
                    <h4>2990</h4>
                    <span>/ht</span>
                  </div>
                  <p>
                    On va à l’essentiel en s’appuyant sur un outil de gestion de
                    contenu et un graphisme existant.
                  </p>
                </div>
                <div className="trait">
                  <div></div>
                </div>
                <div className="include">
                  <p>Inclus dans ce forfait:</p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation graphique
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en place du contenu
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Interface d'administration standard
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation full responsive
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Formulaire de contact intelligent
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Optimisation du référencement
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Statistiques des visites et du trafic
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en ligne, coaching, suivit 6/m
                  </p>
                </div>
                <Link to="/contact/" className="forfait__vitrinebutton link">
                  <button className="linkvtwo">Commencer</button>
                </Link>
              </div>
            </div>
            {/* block two*/}
            <div className="forfait__vitrine center__vitrinethree">
              <div className="forfait__priceblock resp__price">
                <div className="forfait__vitrineprice ">
                  <h3>Web store professionnel</h3>
                  <div className="price__forfait">
                    <span>€</span>
                    <h4>3990</h4>
                    <span>/ht</span>
                  </div>
                  <p>
                    On va plus loin avec une étude approfondie et la création
                    d’une identité professionnelle.
                  </p>
                </div>
                <div className="trait">
                  <div></div>
                </div>
                <div className="include">
                  <p>Inclus dans ce forfait:</p>
                  <p className="center">
                    <FcCheckmark />
                    Charte graphique / logo sur mesure
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en place du contenu
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Interface d'administration optimisée
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Adaptation full responsive
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Formulaire de contact intelligent
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Optimisation du référencement
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Statistiques des visites et du trafic
                  </p>
                  <p className="center">
                    <FcCheckmark />
                    Mise en ligne, coaching, suivit 6/m
                  </p>
                  <Link
                    to="/contact/"
                    className="forfait__vitrinebutton link linkbis"
                  >
                    <button className="linkvtwo">Commencer</button>
                  </Link>
                </div>
                {/* block two*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forfait
