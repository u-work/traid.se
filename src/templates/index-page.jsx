import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { Element, Events, scrollSpy } from 'react-scroll';

import Layout from '../components/layout/Layout';
import Hero from '../components/home/hero';
import SectionServices from '../components/home/SectionServices';
import SectionCore from '../components/home/SectionCore';
import SectionAbout from '../components/home/SectionAbout';
import SectionContact from '../components/home/SectionContact';
import SectionSustainability from '../components/home/SectionSustainability';

const Index = ({ data }) => {
  const { hero, services, core, contact, about, sustainability } = data;
  useEffect(() => {
    Events.scrollEvent.register('begin', (...args) => {
      console.log('begin', args);
    });

    Events.scrollEvent.register('end', (...args) => {
      console.log('end', args);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Layout>
      <Hero data={hero} />
      <Element name="sectionServices">
        <SectionServices data={services} />
      </Element>
      <Element name="sectionSustainability">
        <SectionSustainability data={sustainability} />
      </Element>
      <SectionCore data={core} />
      <Element name="sectionAbout">
        <SectionAbout data={about} />
      </Element>
      <Element name="sectionContact">
        <SectionContact data={contact} />
      </Element>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query HomePage {
    hero: markdownRemark(fields: { slug: { eq: "/hero/" } }) {
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
      }
    }
    services: markdownRemark(fields: { slug: { eq: "/services/" } }) {
      frontmatter {
        services {
          title
          description
          icon {
            publicURL
          }
        }
      }
    }
    sustainability: markdownRemark(
      fields: { slug: { eq: "/sustainability/" } }
    ) {
      html
      frontmatter {
        bgImage {
          childImageSharp {
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
    core: markdownRemark(fields: { slug: { eq: "/core/" } }) {
      frontmatter {
        title
        content {
          description
          icon {
            childImageSharp {
              fixed(width: 30) {
                src
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        circleCaption
      }
    }
    about: markdownRemark(fields: { slug: { eq: "/about/" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    contact: markdownRemark(fields: { slug: { eq: "/contact/" } }) {
      frontmatter {
        title
        team {
          name
          position
          email
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
