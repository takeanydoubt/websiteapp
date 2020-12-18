import styled from "styled-components"
import React from "react"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"

import TutorCard from "../components/sections/TutorCard"
import TutorContextProvider from "../context/TutorContext"
import Header from "../components/sections/Header"
const Tutors = () => {
  return (
    <Wrapper>
      <SEO title="tutors" />

      <Layout>
        <Header />
        <WrapText>
          <Title>Online Tutors</Title>
          <Description>Connect with an online tutor instantly</Description>
          <Paragraph>
            Special Offer: you can order a tutor to your home by choosing the
            package in person class!
          </Paragraph>
        </WrapText>
        <GroupCard>
          <TutorContextProvider>
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
          </TutorContextProvider>
        </GroupCard>
      </Layout>
    </Wrapper>
  )
}

export default Tutors

const Wrapper = styled.div`
  display: grid;

  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const GroupCard = styled.div`
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`
const WrapText = styled.div`
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-gap: 30px;
`
const Title = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  mix-blend-mode: normal;
`
const Description = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 130%;
  /* or 22px */
  color: rgba(255, 255, 255, 0.7);

  /* or 19px */
`
const Paragraph = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 130%;
  /* or 22px */
  color: rgba(255, 255, 255, 0.7);
`
