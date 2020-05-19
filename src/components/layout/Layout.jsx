import React from 'react';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'gatsby';

import Navbar from './Navbar';
import Footer from './Footer';

import './layout.css';
import { theme } from '../../styles/theme';

const Layout = ({ children, path }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar path={path} />
        {children}
        <Footer />
        <CookieConsent
          location="bottom"
          enableDeclineButton
          buttonText="Jag accepterar"
          buttonStyle={{
            background: '#cccccc',
            borderRadius: '15px',
            padding: '10px 15px',
          }}
          declineButtonStyle={{
            background: '#cccccc',
            color: '#000000',
            padding: '10px 15px',
            borderRadius: '15px',
          }}
          style={{
            background: '#ffffff',
            color: '#000000',
            minHeight: '10rem',
            alignItems: 'center',
            lineHeight: '2.5rem',
          }}
          declineButtonText="Nej tack"
          cookieName="gatsby-gdpr-google-analytics"
        >
          Vi använder cookies för att ständigt förbättra sidan för våra
          användare, men självklart bara med ditt medgivande.{' '}
          <Link style={{ textDecoration: 'underline' }} to="/privacy-policy">
            Läs mer om hur vi använder cookies.
          </Link>
        </CookieConsent>
      </ThemeProvider>
    </>
  );
};

export default Layout;
