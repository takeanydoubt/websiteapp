import React from "react"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import Header from "../components/sections/Header"
import ApplySection from "../components/sections/ApplySection"
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

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);
`
