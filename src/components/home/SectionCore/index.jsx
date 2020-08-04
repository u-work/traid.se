import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

import VisibilitySensor from '../../../utils/VisibilitySensor';
import { fadeIn } from '../../../utils/animations';

const SectionCore = ({ data }) => {
  const { frontmatter } = data;
  return (
    <SectionCoreWrapper>
      <VisibilitySensor minTopValue={300}>
        {isShown => {
          return (
            <div className="content">
              <div className="list">
                <h4 className="list-title">{frontmatter.title}</h4>
                <ul className="list-content">
                  {frontmatter.content.map((item, idx) => (
                    <AnimateItem isShown={isShown} delay={idx / 4}>
                      <li key={item.title} className="list-content-item">
                        <div className="icon-container">
                          <img
                            src={item.icon.childImageSharp.fixed.src}
                            alt={item.title}
                          />
                        </div>
                        {item.description}
                      </li>
                    </AnimateItem>
                  ))}
                </ul>
              </div>
              <AnimateCircle isShown={isShown}>
                <div className="circle">
                  <Image fluid={frontmatter.image.childImageSharp.fluid} />
                  <p className="circle-label">{frontmatter.circleCaption}</p>
                </div>
              </AnimateCircle>
            </div>
          );
        }}
      </VisibilitySensor>
    </SectionCoreWrapper>
  );
};

const SectionCoreWrapper = styled.section`
  width: 100%;
  height: 60rem;
  padding-top: 3rem;

  .content {
    max-width: 110rem;
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }

  .list {
    width: 100%;
    height: 100%;
    padding-left: 7rem;
    padding-top: 2rem;
  }

  .list-content {
    width: 100%;
  }

  .list-title {
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  .list-content-item {
    width: 100%;
    height: 9rem;
    font-size: 2.5rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;

    .icon-container {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      margin-bottom: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }

  .circle {
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      margin: 0 auto;
      width: 40rem;
      height: 40rem;
      object-fit: contain;
      object-position: center;
      -o-object-fit: contain;
      -o-object-position: contain;
      background-color: transparent;
    }
  }

  .circle-label {
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    .list {
      padding-left: 1rem;
    }

    .circle {
      padding-right: 2rem;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: 100%;

    .circle {
      .gatsby-image-wrapper {
        margin: 2rem 3rem;
        width: auto;
        height: auto;
      }
    }

    .content {
      flex-direction: column;
      align-items: center;
    }

    .list {
      padding: 0;
      margin-bottom: 3rem;
      margin-left: 1rem;
    }

    .list-title {
      text-align: center;
      margin-left: 0rem;
      font-size: 2rem;
    }

    .list-content {
      margin: 0 auto;
      padding-left: 2rem;
      li {
        text-align: start;
        font-size: 1.5rem;
      }
    }

    .list-content-item {
      height: 6rem;
      .icon-container {
        width: 3rem;
        height: 3rem;
        margin-right: 2.7rem;
        margin-left: 1.3rem;
      }
    }

    .circle-label {
      font-size: 2.5rem;
    }
  }
`;
const AnimateCircle = styled.div`
  visibility: ${props => (props.isShown ? 'visible' : 'hidden')};
  ${props =>
    props.isShown &&
    css`
      animation: ${fadeIn('down')} 0.8s ease-out backwards;
    `}
`;

const AnimateItem = styled.div`
  visibility: ${props => (props.isShown ? 'visible' : 'hidden')};
  ${props =>
    props.isShown &&
    css`
      animation: ${fadeIn('down')} 0.8s ease-out ${props.delay}s backwards;
    `}
`;
export default SectionCore;
