import React from "react"
import AuthForm from "../components/forms/AuthForm"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyle"
import Header from "../components/sections/Header"
const SignUp = () => {
  var userIsRegistered = false
  return (
    <Wrapper>
      <SEO title="signup" />
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <AuthForm isRegistered={userIsRegistered} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default SignUp

const Wrapper = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  background: url("/images/waves/certificate-wave1.svg");
  /* max-width: 1234px; */
  margin: 0 auto;
  padding: 120px 30px;
`
