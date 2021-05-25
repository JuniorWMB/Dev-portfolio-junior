import { Link } from "gatsby"
import React from "react"
import { PopupButton } from "react-calendly"

import "./contact.css"
const Contact = () => {
  return (
    <>
      <div className="contact__contain">
        <Link to="/contact/">
          <button>Book un call</button>
        </Link>
        <PopupButton
          color="#00a2ff"
          text="Click Junior"
          textColor="#ffffff"
          url="https://calendly.com/junior-wembopa/15min"
          utm={{
            utmCampaign: "Spring Sale 2019",
            utmContent: "Shoe and Shirts",
            utmMedium: "Ad",
            utmSource: "Facebook",
            utmTerm: "Spring",
          }}
          styles={{
            position: "relative",
          }}
        />
      </div>
    </>
  )
}

export default Contact
