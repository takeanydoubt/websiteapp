import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
function Mission() {
  return (
    <Wrapper>
      <Title>Our Mission</Title>
      <Subtitle>
        TakeAnyDoubt was built with the purpose to provide students and tutors
        with a reliable platform that contains all the essential tools and
        features for them to work and interact easily and efficiently.
      </Subtitle>
    </Wrapper>
  )
}

export default Mission

const Wrapper = styled.div`
  margin: 80px auto;
  background: url("/images/waves/hero-wave2.svg");
`
const Title = styled.h1`
  font-weight: 700;
  color: ${themes.light.text2};
  font-size: 34px;
  text-align: center;
  padding: 30px 0 30px 0;
`
const Subtitle = styled.p`
  font-size: 18px;
  color: ${themes.light.text2};
  margin: 20px 120px 20px 120px;
  line-height: 32px;

  @media (max-width: 640px) {
    margin: 20px 20px 20px 20px;
  }
`
