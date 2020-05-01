import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Fade } from "react-reveal"

import { title } from "../../../styles/theme"

const SectionAbout: React.FC = () => {
  const { protest } = useStaticQuery(query)

  return (
    <SectionAboutWrapper>
      <div className="container mb-2">
        <Fade bottom fraction={0.1}>
          <h3 className="mb-3">Om Traid</h3>
          <div className="content">
            <div className="left">
              <h4 className="mb-2">
                Vi hjälper dig att skräddarsy ett elavtal som passar för just
                ditt företag
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis rerum nihil reiciendis dolore deserunt incidunt
                praesentium nemo fuga? Velit fugit suscipit ipsam cum
                aspernatur, repudiandae vero, maiores perferendis atque
                quibusdam minus nesciunt delectus illo, culpa facilis deserunt
                corrupti. Ex temporibus perspiciatis nesciunt.
              </p>
            </div>
            <div className="right">
              <Image className="image" fluid={protest.childImageSharp.fluid} />
            </div>
          </div>
        </Fade>
      </div>
    </SectionAboutWrapper>
  )
}

const query = graphql`
  query {
    protest: file(relativePath: { eq: "protest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const SectionAboutWrapper = styled.section`
  width: 100%;
  min-height: 40rem;
  padding: 4rem 0;

  h3 {
    display: block;
    ${title}
    color: ${props => props.theme.primaryColor}
  }

  .content {
    display: flex;

    .left {
      width: 100%;
      height: 100%;
      padding: 1rem 15rem;
      text-align: center;

      p {
          color: ${props => props.theme.textPrimary}
      }
    }

    .right {
      width: 100%;
      height: 100%;

      .image {
        width: 100%;
        height: 100%;
        object-position: center;
        -o-object-position: center;
        object-fit: center;
        -o-object-fit: center;
      }
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
      .mb-3 {
        margin-bottom: 2rem;
      }

      .content{
        flex-direction: column;
        -ms-flex-direction: column;
        align-items: center;

        .left {
          padding: 2rem 2rem;
        }
      }

  }
`

export default SectionAbout
