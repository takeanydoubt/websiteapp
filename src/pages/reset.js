import React from "react"
import styled from "styled-components"
import ResetForm from "../components/forms/ResetForm"
import SEO from "../components/layout/seo"
import Header from "../components/sections/Header"
import { GlobalStyle } from "../components/styles/GlobalStyle"

export default function Reset() {
  return (
    <Wrapper>
      <SEO title="signin" />
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <ResetForm />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/certificate-wave1.svg");
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
`
