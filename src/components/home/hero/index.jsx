import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ data }) => {
  const { frontmatter, html } = data;

  return (
    <HeroWrapper>
      <BackgroundImage
        fluid={frontmatter.bgImage.childImageSharp.fluid}
        className="bcgImage"
      >
        <BannerWrapper>
          <div className="content">
            <h2 className="title">{frontmatter.title}</h2>
            <div
              className="subheader"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </BannerWrapper>
      </BackgroundImage>
    </HeroWrapper>
  );
};

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

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: 60rem;
  }
`;

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
      font-weight: 400;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    padding: 2rem;

    .title {
      font-size: 4rem;
    }
  }
`;

export default Hero;
