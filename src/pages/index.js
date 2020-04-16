import React, { useEffect } from "react"
import { Element, Events, scrollSpy } from "react-scroll"

import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import SectionServices from "../components/home/SectionServices"
import SectionAbout from "../components/home/SectionAbout"
import SectionContact from "../components/home/SectionContact"

const Index = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

  return (
    <Layout>
      <Hero />
      <Element name="sectionServices">
        <SectionServices />
      </Element>
      <Element name="sectionAbout">
        <SectionAbout />
      </Element>
      <Element name="sectionContact">
        <SectionContact />
      </Element>
    </Layout>
  )
}

export default Index