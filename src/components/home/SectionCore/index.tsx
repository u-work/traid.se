import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Fade } from "react-reveal"

import { data } from "./data"
const circleSvg = require("../../../images/circle-icons.svg")
const icons = require("../../../images/Image-34.svg")

const SectionCore: React.FC = () => {
  return (
    <SectionCoreWrapper>
      <div className="content">
        <Fade left>
          <div className="list">
            <h4 className="list-title">Vår kärnverksamhet</h4>
            <ul className="list-content">
              {data.map((item, index) => (
                <li key={index} className="list-content-item">
                  <span style={{ marginRight: "4px" }}>{index + 1}.</span>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </Fade>
        <Fade right>
          <div className="circle">
            <img src={circleSvg} alt="core-features-circle" />
            <p className="circle-label">- I en cirkular handelsplats</p>
          </div>
        </Fade>
      </div>
    </SectionCoreWrapper>
  )
}

const SectionCoreWrapper = styled.section`
  width: 100%;
  height: 60rem;
  padding-top: 3rem;

  .content {
    max-width: 110rem;
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }

  .list {
    width: 100%;
    height: 100%;
    padding-left: 7rem;
    padding-top: 7rem;
  }

  .list-content {
    width: 85%;
  }

  .list-title {
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  .list-content-item {
    font-size: 2.5rem;
    padding: 1rem 0;
  }

  .circle {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 40rem;
      object-fit: contain;
      object-position: center;
      -o-object-fit: contain;
      -o-object-position: contain;
      background-color: transparent;
    }
  }

  .circle-label {
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: 100%;

    .content {
      flex-direction: column;
      align-items: center;
    }

    .list {
      padding: 0;
      margin-bottom: 3rem;
    }

    .list-title {
      text-align: center;
      margin-left: 0rem;
    }

    .list-content {
      margin: 0 auto;
      li {
        text-align: center;
      }
    }

    .circle-label {
      font-size: 2.5rem;
    }
  }
`

export default SectionCore
