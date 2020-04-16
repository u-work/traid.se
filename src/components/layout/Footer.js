import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p style={{ fontSize: "4rem", color: "#fff", textAlign: "center" }}>
          FOOTER
        </p>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.primaryColor};
  padding: 4rem 0;
`

export default Footer
