import React from 'react';
import styled from 'styled-components';
// import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import { Parallax, Background } from 'react-parallax';

import { title } from '../../../styles/theme';

const SectionSustainability = ({ data }) => {
  const { html, frontmatter } = data;
  return (
    <SectionWrapper>
      <h3 className="title">{frontmatter.title}</h3>
      <div className="overlay" />
      <Parallax
        strength={500}
        blur={{ min: -15, max: 15 }}
        bgImage={frontmatter.bgImage.childImageSharp.fluid.src}
      >
        <div className="container">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Parallax>
    </SectionWrapper>
  );
};

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

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .content {
      padding: 1rem;
      font-size: 1.2rem;
    }
    .title {
      padding: 0 3rem;
      font-size: 2rem;
    }
  }
`;

export default SectionSustainability;
