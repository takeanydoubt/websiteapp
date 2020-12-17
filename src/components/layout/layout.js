import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "../sections/Header"

import "./layout.css"
import Footer from "../sections/Footer"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Header />
      <Footer />
    </>
  )
}

export default Layout
