import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PrivacySection from "../components/sections/PrivacySection"
import { GlobalStyle } from "../components/styles/GlobalStyle"
const Privacy = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO title="terms-conditions" />
      <Layout>
        <PrivacySection />
      </Layout>
    </Wrapper>
  )
}

export default Privacy

const Wrapper = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);
  /* background: linear-gradient(180deg, #252569 6.31%, #28234d 42.8%); */
  /* background: #f2f6ff; */
`
