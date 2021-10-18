import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from "./styles/GlobalStyles";


const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
