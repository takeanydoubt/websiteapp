import React from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
const EdgeHero = () => {
  return (
    <Hero>
      <Title>Why use TAD?</Title>
      <HeroGroup>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/chat.svg" />
            Relevant content
          </Heading>

          <Paragraph>1. Tutor notes and presentations</Paragraph>
          <Paragraph>2. Book exercises solutions</Paragraph>
          <Paragraph>3. Quizzes</Paragraph>
          <Paragraph>4. Question papers and memos</Paragraph>
        </WrapperText>

        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/award.svg" />
            Professional tutors
          </Heading>
          <Paragraph>1. Only certified tutors</Paragraph>
          <Paragraph>2. Qualified tutors</Paragraph>
        </WrapperText>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/livestreams.svg" />
            All the tools you need
          </Heading>
          <Paragraph>1. Virtual whiteboard</Paragraph>
          <Paragraph>2. files sharing</Paragraph>
          <Paragraph>3. Audio/video chat</Paragraph>
          <Paragraph>4. Screensharing</Paragraph>
        </WrapperText>
        <WrapperText>
          <Heading>
            <img alt="" src="images/icons/comment.svg" />
            Advanced technology
          </Heading>
          <Paragraph>1. Content monetisation</Paragraph>
          <Paragraph>2. Simple notification service</Paragraph>
        </WrapperText>
      </HeroGroup>
      <Positio>
        <PurchaseButton />
      </Positio>
    </Hero>
  )
}

export default EdgeHero

const Hero = styled.div`
  margin: 0 auto 0 auto;
  padding: 6px 30px;
  display: grid;
  grid-gap: 30px;
  background: url("/images/waves/hero-wave1.svg");
`
const HeroGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  color: ${themes.light.text2};
  font-size: 34px;
  text-align: center;

  @media (max-width: 640px) {
    margin: 40px 0 0 0;
    font-size: 34px;
  }
`
const WrapperText = styled.div`
  margin: 0 auto;

  img {
    height: 50px;
    width: 50px;
    margin: 0 20px -14px 0px;
  }
`
const Heading = styled.h3`
  font-size: 22px;
  line-height: 27px;
  font-weight: 600px;
  color: ${themes.light.text2};
  margin-bottom: 8px;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`
const Paragraph = styled.p`
  font-size: 15px;
  color: ${themes.light.text2};
  line-height: 23px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 300px;
`
const Positio = styled.div`
  display: grid;
  justify-content: center;
`
