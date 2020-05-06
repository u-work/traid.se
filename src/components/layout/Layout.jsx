import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';

import './layout.css';
import { theme } from '../../styles/theme';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
