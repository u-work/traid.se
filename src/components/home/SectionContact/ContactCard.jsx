import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ContactCard = ({ name, email, image, position }) => {
  return (
    <ContactCardWrapper>
      <div className="top mb-2">
        <Image fluid={image} className="image" />
      </div>
      <div className="bottom">
        <h4 className="member-name">{name}</h4>
        <h5 className="mb-1">{position}</h5>
        <p>{email}</p>
      </div>
    </ContactCardWrapper>
  );
};

const ContactCardWrapper = styled.div`
  width: 20rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  margin: 0 5rem;

  .top {
    width: 100%;

    .image {
      width: 20rem;
      height: 20rem;
      border: 4px solid #ccc;
      border-radius: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;

      overflow: hidden;
    }
  }

  .member-name {
    margin-bottom: 0.5rem;
  }

  .bottom {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    margin: 0 2rem;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    min-height: 20rem;
    margin-bottom: 3rem;

    .mb-1 {
      margin-bottom: 0;
    }

    .bottom {
      .mb-2 {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default ContactCard;
