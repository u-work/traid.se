import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import { title } from '../../../styles/theme';

const SectionAbout = ({ data }) => {
  const { frontmatter, html } = data;

  return (
    <SectionAboutWrapper>
      <div className="container mb-2">
        <h3 className="mb-2">{frontmatter.title}</h3>
        <div className="content">
          <div className="description">
            <div
              className="description-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/about-us">{frontmatter.linkText}</Link>
          </div>
        </div>
      </div>
    </SectionAboutWrapper>
  );
};

const SectionAboutWrapper = styled.section`
  width: 100%;
  min-height: 40rem;
  padding: 4rem 0;

  a {
    font-size: 2rem;
    text-decoration: underline;
    color: ${props => props.theme.primaryColor}
  }

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
    h3 {
      font-size: 2rem;
    }
      .mb-3 {
        margin-bottom: 2rem;
      }

      .content{
        flex-direction: column;
        -ms-flex-direction: column;
        align-items: center;
        font-size: 1.2rem;
        padding: 2rem;

        .left {
          padding: 2rem 2rem;
        }
      }

  }
`;

export default SectionAbout;
