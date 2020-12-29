import React from "react"
import styled from "styled-components"
import TutorContextProvider from "../../context/TutorContext"
import { themes } from "../styles/ColorStyles"
import TutorCard from "./TutorCard"
const HeroProfile = () => {
  return (
    <Hero>
      <HeadingSmall>who’s behind</HeadingSmall>
      <Heading>Meet the Tutors</Heading>
      <HeadingDescription>
        We all try to be consistent with our way of teaching step-by-step,
        providing source files and great content in our subjects.
      </HeadingDescription>

      <GroupCard>
        <TutorContextProvider>
          <TutorCard />
          <TutorCard />
        </TutorContextProvider>
      </GroupCard>
    </Hero>
  )
}

export default HeroProfile

const Hero = styled.div`
  padding: 200px 30px;
  display: grid;
  grid-gap: 30px;
`
const GroupCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 768px) {
  }
`
const Heading = styled.h1`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${themes.light.text2};
  mix-blend-mode: normal;
`
const HeadingSmall = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${themes.light.text2};
`
const HeadingDescription = styled.p`
  margin: 20px auto;
  padding-bottom: 40px;
  width: 460px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  color: ${themes.light.text2};
`
