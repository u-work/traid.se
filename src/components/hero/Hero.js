import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Banner from "../banner/Banner"

const Hero = () => {
  const data = useStaticQuery(query)

  return (
    <HeroWrapper>
      <BackgroundImage
        fluid={data.flower.childImageSharp.fluid}
        className="bcgImage"
      >
        <Banner />
      </BackgroundImage>
    </HeroWrapper>
  )
}

const query = graphql`
  query {
    flower: file(relativePath: { eq: "give-flower.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HeroWrapper = styled.section`
  height: 80rem;
  width: 100%;

  .bcgImage {
    width: 100%;
    height: 100%;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default Hero
