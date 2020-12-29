import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
function BeTutor() {
  return (
    <Wrapper>
      <Title>Become a tutor</Title>
      <Subtitle>
        We accomodate tutors from all around South Africa. Benefits include
        mobility, larger customer market, advertising on your behalf, content
        monetisation and guaranteed payments into your bank acc.
      </Subtitle>
    </Wrapper>
  )
}

export default BeTutor

const Wrapper = styled.div`
  width: 812px;
  margin: 10px auto 180px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    margin: 10px auto 120px;
    width: 100%;
  }
`
const Title = styled.h1`
  font-style: normal;
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
