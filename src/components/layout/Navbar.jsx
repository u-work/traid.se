import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from 'react-scroll';

import HambergurIcon from '../home/hamburgerIcon';

const Navbar = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper isOpen={isOpen}>
      <div className="row">
        <div className="logo">
          <GatsbyLink to="/">
            <h4>TRAID</h4>
          </GatsbyLink>
        </div>

        <div className="nav">
          {path === '/' ? (
            <>
              <Link
                to="sectionServices"
                spy
                smooth
                offset={-40}
                duration={500}
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                Hur fungerar Traid
              </Link>
              <Link
                to="sectionSustainability"
                spy
                smooth
                offset={-80}
                duration={500}
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                Hållbarhet
              </Link>
              <GatsbyLink
                to="/about-us"
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                Om Traid
              </GatsbyLink>
              <Link
                to="sectionContact"
                spy
                smooth
                offset={-40}
                duration={500}
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </>
          ) : (
            <>
              <GatsbyLink to="/" className="navLink">
                Hur fungerar Traid
              </GatsbyLink>
              <GatsbyLink to="/#sectionSustainability" className="navLink">
                Hållbarhet
              </GatsbyLink>
              <GatsbyLink
                to="/about-us"
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                Om Traid
              </GatsbyLink>
              <GatsbyLink to="/#sectionContact" className="navLink">
                Kontakt
              </GatsbyLink>
            </>
          )}
        </div>
        <HambergurIcon clicked={toggleMenu} isOpen={isOpen} />
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  z-index: 1000;

  .row {
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme.primaryColor};
  }
  .nav {
    display: flex;
    align-items: center;
    height: 100%;

    .navLink {
      margin: 3rem;
      border-bottom: 2px solid transparent;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid ${props => props.theme.primaryColor};
      }
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    position: fixed;
    background-color: #fff;
    .row {
      justify-content: center;
    }

    .nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-top: 2rem;
      height: 100vh;
      width: 100%;
      transform: ${props =>
        props.isOpen ? 'translateX(0)' : 'translateX(100%)'};

      position: fixed;
      top: 6rem;
      background-color: #fff;
      transition: transform 0.2s ease-out;

      .navLink {
        font-size: 3rem;
        font-weight: 600;
        color: #333;
      }
    }
  }
`;

export default Navbar;
