import { Link } from "gatsby"
import React from "react"
import "./contact.css"
const Contact = () => {
  return (
    <div className="contact__contain">
      <Link to="/contact/">
        <button>Book un call</button>
      </Link>
    </div>
  )
}

export default Contact
