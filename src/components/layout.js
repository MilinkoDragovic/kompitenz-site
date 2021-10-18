import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import { GlobalStyle } from "./styles/GlobalStyles";


const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
