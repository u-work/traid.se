import React from 'react';
import styled from 'styled-components';

import ContactCard from './ContactCard';

import { title } from '../../../styles/theme';

const SectionContact = ({ data }) => {
  const { frontmatter } = data;
  return (
    <SectionContactWrapper>
      <div className="container">
        <h3 className="mb-3">{frontmatter.data}</h3>

        <div className="content">
          {frontmatter.team.map((member, index) => (
            <ContactCard
              name={member.name}
              email={member.email}
              image={member.image.childImageSharp.fluid}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </SectionContactWrapper>
  );
};

const SectionContactWrapper = styled.section`
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
    overflow: hidden;
    flex-wrap: wrap;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {

    .content {
      flex-wrap: wrap;
    }
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
`;

export default SectionContact;
