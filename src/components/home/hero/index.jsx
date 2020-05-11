import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'react-scroll';

const Hero = ({ data, sidePage = false }) => {
  const { frontmatter, html } = data;

  return (
    <HeroWrapper sidePage={sidePage} opacity={frontmatter.opacity}>
      <BackgroundImage
        fluid={frontmatter.bgImage.childImageSharp.fluid}
        className="bcgImage"
        preserveStackingContext
      />
      <BannerWrapper>
        <div className="content">
          <Link to="sectionServices" spy smooth offset={-40} duration={500}>
            <h2 className="title">{frontmatter.title}</h2>
            <div
              className="subheader"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Link>
        </div>
      </BannerWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  height: ${props => (props.sidePage ? '40rem' : '80rem')};
  width: 100%;
  position: relative;

  .bcgImage {
    width: 100%;
    height: 100%;
    opacity: ${props => props.opacity};
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: ${props => (props.sidePage ? '20rem' : '60rem')};
  }
`;

const BannerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);

  .content {
    max-width: 50rem;
    text-align: center;
  }

  .title {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #dd5254;
  }

  .subheader {
    margin-top: 3rem;

    p {
      color: #222;
      font-size: 2rem;
      font-weight: 400;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    padding: 2rem;

    .title {
      font-size: 3rem;
    }

    .subheader {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Hero;
