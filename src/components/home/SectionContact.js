import React from "react"
import styled from "styled-components"
import { Fade } from "react-reveal"

import ContactCard from "../ContactCard/ContactCard"

import { title } from "../../styles/theme"

const SectionContact = ({ ref }) => {
  return (
    <SectionContackWrapper ref={ref}>
      <div className="container">
        <Fade>
          <h3 className="mb-3">Kontakt</h3>
        </Fade>
        <div className="content">
          <Fade bottom delay={100}>
            <ContactCard />
          </Fade>
          <Fade bottom delay={200}>
            <ContactCard />
          </Fade>
          <Fade bottom delay={300}>
            <ContactCard />
          </Fade>
        </div>
      </div>
    </SectionContackWrapper>
  )
}

const SectionContackWrapper = styled.section`
  width: 100%;
  min-height: 40rem;
  padding: 4rem 0;

  h3 {
    ${title}
    color: ${props => props.theme.primaryColor}
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }


  @media (max-width: ${props => props.theme.mobileWidth}) {

      .mb-3{
        margin-bottom: 2rem;
      }

      .content {
        flex-direction: column;
        align-items: center;
      }
    
  }
`

export default SectionContact
