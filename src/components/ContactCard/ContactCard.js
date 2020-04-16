import React from "react"
import styled from "styled-components"

import icon1 from "../../images/icons/woman.svg"
import icon2 from "../../images/icons/student.svg"

const ContactCard = () => {
  const icons = [icon1, icon2]

  return (
    <ContactCardWrapper>
      <div className="top mb-1">
        <img src={icons[Math.floor(Math.random() * 2)]} alt="contact" />
      </div>
      <div className="bottom">
        <h4 className="mb-2">John Doe</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
          dolore voluptatem eius soluta unde aspernatur sapiente! Magnam,
          perferendis quidem!
        </p>
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
