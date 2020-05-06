import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';

const SectionServices = ({ data }) => {
  const {
    frontmatter: { services },
  } = data;

  return (
    <SectionServicesWrapper>
      <div className="container row">
        {services.map((service, index) => (
          <ServiceCard
            key={service.name}
            title={service.name}
            desc={service.description}
            image={service.icon.publicURL}
            delay={index * 150}
          />
        ))}
      </div>
    </SectionServicesWrapper>
  );
};

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
`;

export default SectionServices;
