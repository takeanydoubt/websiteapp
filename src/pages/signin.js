import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import Header from "../components/sections/Header"
import { GlobalStyle } from "../components/styles/GlobalStyle"
import AuthForm from "./../components/forms/AuthForm"
function Signin() {
  var userIsRegistered = true

  return (
    <Wrapper>
      <SEO title="signin" />
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <AuthForm isRegistered={userIsRegistered} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Signin

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/certificate-wave1.svg");
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 30px;
`
