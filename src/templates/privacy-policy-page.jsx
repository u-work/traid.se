import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/hero';

import { title } from '../styles/theme';

const CookiePolicy = ({ data }) => {
  const {
    markdownRemark: { html, frontmatter },
  } = data;

  return (
    <>
      <Helmet>
        <title>Privacy policy | Traid</title>
      </Helmet>
      <Layout>
        <Hero data={{ frontmatter }} sidePage />
        <CookieWrapper>
          <div className="content">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </CookieWrapper>
      </Layout>
    </>
  );
};

export default CookiePolicy;

export const query = graphql`
  query CookiePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bgImage {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        opacity
      }
    }
  }
`;

const CookieWrapper = styled.section`
  width: 100%;
  min-height: 40rem;
  padding: 4rem 0;

  a {
    text-decoration: underline;
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
