import React from 'react';
import styled from 'styled-components';

const HamburgerIcon = ({ clicked, isOpen }) => {
  return (
    <Wrapper onClick={clicked} isOpen={isOpen}>
      <div />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  padding: 1rem;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 1.6rem;
  right: 1rem;

  > div {
    position: relative;
    height: 2px;
    width: 3rem;
    background-color: ${props => (props.isOpen ? 'transparent' : '#333')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-out;
  }

  > div::before,
  > div::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #333;
    transition: all 0.2s ease-out;
  }

  > div::before {
    transform: ${props =>
      props.isOpen ? ' rotate(-135deg)' : 'translateY(-10px)'};
  }
  > div::after {
    transform: ${props =>
      props.isOpen ? ' rotate(-225deg)' : 'translateY(10px)'};
  }

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    display: block;
  }
`;

export default HamburgerIcon;
