import React from "react"
import Contact from "./Contact"
import FindMeToMalt from "./FindMeToMalt"
import "./main.css"
import Mission from "./Mission"
import Project from "./Project"
import Tarification from "./Tarification"
import TextMe from "./TextMe"
import TextNeedMe from "./TextNeedMe"

const Main = () => {
  return (
    <main className="main__contain">
      <TextMe />
      <Mission />
      <TextNeedMe />
      <Project />
      <Contact />
      <Tarification />
      <FindMeToMalt />
      <Contact />
    </main>
  )
}

export default Main
