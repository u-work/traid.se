import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"

import "./layout.css"
import { theme } from "../../styles/theme"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
