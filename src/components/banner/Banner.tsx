import React from "react"
import styled from "styled-components"

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <div className="content">
        <h2 className="title">Vad kan du ge ?</h2>
        <p className="subheader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          corporis exercitationem ducimus harum id quo deserunt repellendus
          obcaecati explicabo. Placeat.
        </p>
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);

  .content {
    max-width: 60rem;
    text-align: center;
  }

  .title {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${props => props.theme.primaryColor};
  }

  .subheader {
    margin-top: 3rem;
    color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    padding: 2rem;

    .title {
      font-size: 4rem;
    }
  }
`

export default Banner
