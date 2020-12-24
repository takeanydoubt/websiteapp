import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import Header from "../components/sections/Header"
import ApplicationForm from "../components/forms/ApplicationForm"

const TutorApplication = () => {
  return (
    <Wrapper>
      <SEO title="tutor-application" />
      <Header />
      <TextWrapper>
        <Title>Talk to an expert</Title>
        <Subtitle>
          We’ll help you combine the flexibility of the modern web with the
          control and compliance your business needs.
        </Subtitle>
      </TextWrapper>
      <ContentWrapper>
        <WrapperContent>
          <Heading>Let's discuss your project</Heading>
          <Description>Let's discuss your project</Description>
        </WrapperContent>
        <ApplicationForm />
      </ContentWrapper>
    </Wrapper>
  )
}

export default TutorApplication

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);
  margin: 0 auto;
`
const TextWrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const WrapperContent = styled.div``
const Heading = styled.h1``
const Description = styled.p``

const Title = styled.div`
  padding: 260px 0 0 0;
  text-align: center;
  color: #00ad9f;
  font-family: MADE-Dillan, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 60px;
  font-weight: 600;
  line-height: 1.333;
`
const Subtitle = styled.div`
  color: #0e1e25;
  font-size: 22px;
  text-align: center;
  line-height: 2;
  margin: 20px 320px 20px 320px;
`
