import React, { useState } from "react"
import { Link } from "gatsby"
import { GrLinkedin } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"
import { FcHome } from "react-icons/fc"
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs"

import "./header.css"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header className="header__contain">
      <nav className="header__nav">
        <div className="headernav__left">
          <h1>
            Junior Wembopa /
            <span className="headernav__span"> Dév. ReactJS</span>
          </h1>
        </div>
        <div className="iconeresponsive">
          <BsArrowBarLeft onClick={() => setShow(!show)} />
        </div>
        <div className={show ? "menu__responsive hiddenmenu" : "hiddenmenu"}>
          <div className="icon__responsive__backgrnd">
            <BsArrowBarRight
              onClick={() => setShow(!show)}
              className="button__responsive"
              size={60}
            />
          </div>
          <div className="responsivenav">
            <Link to="/" className="Link">
              <FcHome />
            </Link>
            <Link to="/portfolio/" className="Link">
              Portfolio
            </Link>
            <Link to="/services/" className="Link">
              Services
            </Link>
            <Link to="/tarifs/" className="Link">
              Tarifs
            </Link>
            <Link to="/contact/" className="Link">
              Contact
            </Link>
            <a
              href="https://github.com/JuniorWMB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub color="#000" />
            </a>

            <a
              href="https://www.linkedin.com/feed/https://www.linkedin.com/in/junior-wembopa-42b2311a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin color="#000" />
            </a>
          </div>
        </div>
        <ul className="headernav__right">
          <Link to="/" className="Link">
            <FcHome />
          </Link>
          <Link to="/portfolio/" className="Link">
            Portfolio
          </Link>
          <Link to="/services/" className="Link">
            Services
          </Link>
          <Link to="/tarifs/" className="Link">
            Tarifs
          </Link>
          <Link to="/contact/" className="Link">
            Contact
          </Link>
          <li>
            <a
              href="https://github.com/JuniorWMB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub color="#000" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/feed/https://www.linkedin.com/in/junior-wembopa-42b2311a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin color="#000" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
