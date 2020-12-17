import React from "react"
import ApplySection from "../components/ApplySection"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import Header from "../components/sections/Header"
const Apply = () => {
  return (
    <Wrapper>
      <Header />
      <SEO title="apply" />
      <ApplySection />
      <Layout />
    </Wrapper>
  )
}

export default Apply

const Wrapper = styled.div``
