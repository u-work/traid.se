import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { title } from "../../../styles/theme"

const SectionSustainability: React.FC = () => {
  const { text, clothing } = useStaticQuery(query)

  return (
    <SectionWrapper>
      <h3 className="title">Traid & hållbarhet</h3>
      <BackgroundImage
        fluid={clothing.childImageSharp.fluid}
        style={{ position: "relative" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: text.html }}
          ></div>
        </div>
      </BackgroundImage>
    </SectionWrapper>
  )
}

const query = graphql`
  query {
    text: markdownRemark(frontmatter: { title: { eq: "sustainability" } }) {
      html
    }
    clothing: file(relativePath: { eq: "clothing-store.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const SectionWrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    padding: 5rem 0 4rem 0;
  }

  .title {
    color: ${props => props.theme.primaryColor};
    ${title};
    margin-bottom: 3rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: -50;
  }

  .content {
    max-width: 80rem;
    text-align: center;
    padding: 4rem;

    p {
      padding: 3rem;
      margin-bottom: 3rem;
      background-color: rgba(255, 255, 255, 0.92);
      border-radius: 6px;
    }
  }
`

export default SectionSustainability
