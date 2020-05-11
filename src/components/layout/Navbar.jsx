import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Link, scroller } from 'react-scroll';

const Navbar = ({ path }) => {
  return (
    <NavbarWrapper>
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
              >
                Hållbarhet
              </Link>
              <GatsbyLink to="/about-us" className="navLink">
                Om Traid
              </GatsbyLink>
              <Link
                to="sectionContact"
                spy
                smooth
                offset={-40}
                duration={500}
                className="navLink"
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
              <GatsbyLink to="/about-us" className="navLink">
                Om Traid
              </GatsbyLink>
              <GatsbyLink to="/#sectionContact" className="navLink">
                Kontakt
              </GatsbyLink>
            </>
          )}
        </div>
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
    .row {
      justify-content: center;
    }
    .nav {
      display: none;
    }
  }
`;

export default Navbar;
