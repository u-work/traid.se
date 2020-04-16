import React from "react"
import styled from "styled-components"

import { services } from "../../data/services"
import ServiceCard from "./ServiceCard"

const SectionServices = ({ ref }) => {
  const renderServices = Object.values(services).map((service, index) => (
    <ServiceCard
      key={index}
      title={service.name}
      desc={service.desc}
      image={service.icon}
      delay={index * 150}
    />
  ))

  return (
    <SectionServicesWrapper ref={ref}>
      <div className="container row">{renderServices}</div>
    </SectionServicesWrapper>
  )
}

const SectionServicesWrapper = styled.section`
  margin: 5rem 0;
  width: 100%;
  min-height: 40rem;

  .row {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .row {
      flex-direction: column;
      align-items: center;
    }
  }
`

export default SectionServices
