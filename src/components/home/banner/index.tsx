import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Banner: React.FC = () => {
  const data = useStaticQuery(query)

  return (
    <BannerWrapper>
      <div className="content">
        <h2 className="title">Vad kan du ge ?</h2>
        <div
          className="subheader"
          dangerouslySetInnerHTML={{ __html: data.text.html }}
        ></div>
      </div>
    </BannerWrapper>
  )
}

const query = graphql`
  query {
    text: markdownRemark(frontmatter: { title: { eq: "banner" } }) {
      html
    }
  }
`

const BannerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);

  .content {
    max-width: 50rem;
    text-align: center;
  }

  .title {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${props => props.theme.primaryColor};
  }

  .subheader {
    margin-top: 3rem;

    p {
      color: #444;
      font-size: 2rem;
      font-weight: 500;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    padding: 2rem;

    .title {
      font-size: 4rem;
    }
  }
`

export default Banner
