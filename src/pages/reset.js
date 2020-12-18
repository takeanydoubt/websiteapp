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
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  background: url("/images/waves/certificate-wave1.svg");
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 120px 30px;
`
