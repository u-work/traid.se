import React from "react"
import styled from "styled-components"

interface IContactCardProps {
  name: string
  email: string
  src: string
}

const ContactCard: React.FC<IContactCardProps> = ({ name, email, src }) => {
  return (
    <ContactCardWrapper>
      <div className="top mb-1">
        <img src={src} alt="contact" />
      </div>
      <div className="bottom">
        <h4 className="mb-2">{name}</h4>
        <p>{email}</p>
      </div>
    </ContactCardWrapper>
  )
}

const ContactCardWrapper = styled.div`
  width: 20rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  margin: 0 5rem;

  .top {
    width: 100%;
    height: 40%;
    padding: 2rem;

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
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    margin: 0;
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
`

export default ContactCard
