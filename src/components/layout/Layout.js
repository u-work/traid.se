import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"

import "./layout.css"
import { theme } from "../../styles/theme"

const Layout = ({ children, allRef }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar allRef={allRef} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
