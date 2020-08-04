import React from 'react';
import styled, { css } from 'styled-components';

import ServiceCard from './ServiceCard';
import VisibilitySensor from '../../../utils/VisibilitySensor';
import { fadeIn } from '../../../utils/animations';

const SectionServices = ({ data }) => {
  const {
    frontmatter: { services },
  } = data;

  return (
    <SectionServicesWrapper>
      <VisibilitySensor minTopValue={200}>
        {isShown => {
          return (
            <div className="container row">
              {services.map((service, index) => (
                <Animate isShown={isShown} delay={index}>
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    desc={service.description}
                    image={service.icon.publicURL}
                    delay={index * 150}
                  />
                </Animate>
              ))}
            </div>
          );
        }}
      </VisibilitySensor>
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
      padding: 0 2rem;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .row {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Animate = styled.div`
  visibility: ${props => (props.isShown ? 'visible' : 'hidden')};
  ${props =>
    props.isShown &&
    css`
      animation: ${fadeIn('down')} 0.8s ease-out ${props.delay / 3}s backwards;
    `}
`;

export default SectionServices;
