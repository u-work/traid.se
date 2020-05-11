import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <FooterWrapper>
      <div className="container">
        <p style={{ fontSize: '4rem', color: '#fff', textAlign: 'center' }}>
          TRAID
        </p>

        <FormWrapper
          onSubmit={async e => {
            e.preventDefault();
            if (!emailRegex.test(email)) {
              return;
            }
            setEmail('');
            await addToMailchimp(email);
            setSubmitted(true);
            setTimeout(() => {
              setSubmitted(false);
            }, 3000);
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Få vårt nyhetsbrev:</label>
            <input
              className="form-input"
              name="email"
              type="text"
              placeholder="Din emailadress"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
            className="btn"
            type="submit"
            disabled={!emailRegex.test(email)}
          >
            {submitted ? 'Tack!' : 'Skriv upp dig'}
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

    &:disabled,
    &[disabled] {
      color: #cccccc;
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin: auto;
  }
`;

export default Footer;
