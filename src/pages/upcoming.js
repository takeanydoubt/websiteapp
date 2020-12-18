import React from "react"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import Header from "../components/sections/Header"
import SectionX from "../components/sections/SectionX"
const UpComming = () => {
  return (
    <Wrapper>
      <Header />
      <SEO title="upComming" />
      <SectionX />
      <Layout />
    </Wrapper>
  )
}

export default UpComming

const Wrapper = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
