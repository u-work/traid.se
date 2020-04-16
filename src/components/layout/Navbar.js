import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="container row">
        <div className="logo">
          <h4>TRAID</h4>
        </div>
        <div className="nav">
          <Link
            to="sectionServices"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navLink"
          >
            Vad kan du ge
          </Link>
          <Link
            to="sectionAbout"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navLink"
          >
            Om Traid
          </Link>
          <Link
            to="sectionContact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navLink"
          >
            Kontact
          </Link>
        </div>
      </div>
    </NavbarWrapper>
  )
}

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
`

export default Navbar
