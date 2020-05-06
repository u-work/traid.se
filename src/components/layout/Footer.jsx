import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p style={{ fontSize: '4rem', color: '#fff', textAlign: 'center' }}>
          TRAID
        </p>

        <FormWrapper
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label>Get our newsletter:</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn" type="submit">
            Subscribe
          </button>
        </FormWrapper>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.primaryColor};
  padding: 4rem 0;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    .container {
      flex-direction: column;
    }
  }
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: flex-end;
  margin-left: auto;

  .form-group {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;

    label {
      color: #fff;
      margin-bottom: 5px;
    }
  }

  .form-input {
    height: 3.8rem;
    width: 20rem;
    padding: 0.6rem;
    border-radius: 5px;
    border: none;
    font-size: 1.6rem;
    color: ${props => props.theme.textPrimary};
  }

  .btn {
    height: 3.8rem;
    border: none;
    color: rgb(100, 100, 100);
    background: rgb(255, 255, 255);
    padding: 0.8rem 3rem;
    font-size: 1.4rem;
    border-radius: 6px;
    margin-left: 2rem;
    transition: all 0.1s ease-out;

    &:hover {
      cursor: pointer;
      opacity: 0.95;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0px);
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin: auto;
  }
`;

export default Footer;
