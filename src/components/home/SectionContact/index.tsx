import React from "react"
import styled from "styled-components"
import { Fade } from "react-reveal"

import { team } from "./data"
import ContactCard from "../../ContactCard/ContactCard"

import { title } from "../../../styles/theme"

const SectionContact: React.FC = () => {
  return (
    <SectionContackWrapper>
      <div className="container">
        <Fade>
          <h3 className="mb-3">Kontakt</h3>
        </Fade>
        <div className="content">
          {team.map((member, index) => (
            <Fade bottom delay={(index + 1) * 100}>
              <ContactCard
                name={member.name}
                email={member.email}
                imgUrl={member.imgUrl}
              />
            </Fade>
          ))}
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
