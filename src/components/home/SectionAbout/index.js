import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Fade } from "react-reveal"

import { title } from "../../../styles/theme"

const SectionAbout = ({ data }) => {
  const { frontmatter, html } = data

  return (
    <SectionAboutWrapper>
      <Fade bottom fraction={0.1}>
        <div className="container mb-2">
          <h3 className="mb-2">{frontmatter.title}</h3>
          <div className="content">
            <div className="description">
              <div
                className="description-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
            <div className="image-container">
              <Image
                className="image"
                fluid={frontmatter.image.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </Fade>
    </SectionAboutWrapper>
  )
}

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
    flex-direction: column;
    -ms-flex-direction: column;

    .description {
      width: 100%;
      height: 100%;
      padding: 1rem 15rem;
      text-align: center;

      .description-content  {
        h4 {
          margin-bottom: 3rem;
        }
        p {
          color: ${props => props.theme.textPrimary}
      }
      }

      
    }

    .image-container {
      width: 60%;
      height: 40rem;
      margin: 0 auto;
      margin-top: 3rem;

      .image {
        width: 100%;
        height: 100%;
        object-position: top;
        -o-object-position: top;
        object-fit: cover;
        -o-object-fit: cover;
      }
    }
  }

  @media (max-width: ${props => props.theme.tabletWidth}){
    .content {
      .description{
      padding: 1rem;
    }
    .image-container {
          width: 100%;
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
