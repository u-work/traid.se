import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const ServiceCard = ({ image, title, desc, delay }) => {
  return (
    <ServiceCardWrapper>
      <div className="top">
        <img src={image} alt={title} />
      </div>
      <Fade bottom fraction={0.4} delay={delay}>
        <div className="bottom">
          <h3 className="title">{title}</h3>
          <ul className="desc">
            {desc.map(description => (
              <li>{description}</li>
            ))}
          </ul>
        </div>
      </Fade>
    </ServiceCardWrapper>
  );
};

const ServiceCardWrapper = styled.div`
  min-width: 30rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  margin: 0 5rem;

  .top {
    height: 40%;
    width: 100%;
    padding: 3rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .bottom {
    width: 100%;
    height: 60%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.primaryColor};
      margin-bottom: 3rem;
    }

    .desc {
      margin-left: 4.5rem;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${props => props.theme.textPrimary};
      line-height: 2.5rem;
      
      li {
        margin-bottom: 1.5rem;
        list-style: outside;
      }
    }
  }
  @media (max-width: ${props => props.theme.tabletWidth}) {
    margin: 0;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: 10rem;
    .top {
      padding: 2rem;
      padding-left: 3rem;
    }

    .bottom {
      .desc {
        padding: 0;
        text-align: center;
        margin-left: 0;
        font-size: 1.2rem;
        li {
          list-style: none;
        }
      }
    }
  }
`;

export default ServiceCard;
