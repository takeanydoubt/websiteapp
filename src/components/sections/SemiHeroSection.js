import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import SemiHeroCard from "./SemiHeroCard"

const SemiHeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>How TAD works</Title>
        </TextWrapper>
        <CardGroup>
          <Description>
            <SemiHeroCard image="https://static.dribbble.com/users/1908682/screenshots/4817915/______-___-________3.jpg" />
            <Heading>1. Choose service</Heading>
            <Paragraph>
              In order to accomodate the needs of every student TAD has to types
              of tutoring services affordable packages and face to face direct
              tutoring. Choose what suits you the best, introduce a debit card
              or EFT payment and you are ready to start learning.
            </Paragraph>
          </Description>
          <Description>
            <SemiHeroCard image="https://static.dribbble.com/users/81451/screenshots/6463636/illustration---n2.png" />
            <Heading>2.Book lesson</Heading>
            <Paragraph>
              Make use of our search bar or navigate the platform to select
              which tutor you want to help you and make a booking for the
              available slots of that specific tutor.
            </Paragraph>
          </Description>
          <Description>
            <SemiHeroCard image="https://cdn.dribbble.com/users/508588/screenshots/14009907/media/c12a7603eb5e798a85962d40e6ff4066.jpg?compress=1&resize=1600x1200" />
            <Heading>3.Learn</Heading>
            <Paragraph>
              Get help from a professional tutor and use our variety of tools
              such as virtual whiteboard, video/audio chat, files sharing,
              screen sharing and much more to enhance your learning experience.
            </Paragraph>
          </Description>
          <Description>
            <SemiHeroCard image="https://static.dribbble.com/users/142973/screenshots/9875511/media/9fe204959d18d53462629c682ea89c14.png" />
            <Heading>4.Review</Heading>
            <Paragraph>
              After the tutoring class is completed the student will have the
              chance to rate the tutor to help us maitain our quality.
            </Paragraph>
          </Description>
        </CardGroup>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SemiHeroSection

const Wrapper = styled.div`
  background: url("/images/waves/hero-wave2.svg");
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 300px 30px 0 0;

  @media (max-width: 640px) {
    margin: 0 auto;
    padding: 20px 0px;
  }
`

const CardGroup = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
`
const TextWrapper = styled.div`
  margin: 0 auto;
`

const Title = styled.h1`
  font-weight: 700;
  color: ${themes.light.text2};
  font-size: 34px;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 50px;
    margin-top: 40px;
  }
`
const Description = styled.div`
  display: grid;
  grid-gap: 40px;
  margin: 0 10px 0 10px;
  justify-items: center;
`
const Heading = styled.h3`
  color: ${themes.light.text2};
  font-size: 30px;
  text-align: center;
`
const Paragraph = styled.p`
  width: 20rem;
  font-size: 15px;
  color: ${themes.light.text2};
  line-height: 23px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 300px;
`
