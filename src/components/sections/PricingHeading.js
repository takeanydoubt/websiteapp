import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

const PricingHeading = () => {
  return (
    <HeroGroup>
      <Title>Ready to start?</Title>
      <Content>
        Online tutoring with tutors from all around South Africa.
      </Content>
    </HeroGroup>
  )
}

export default PricingHeading

const HeroGroup = styled.div`
  margin-top: 0px;
  width: 100%;
  padding-top: 170px;
  padding-bottom: 0px;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${themes.light.text2};
`
const Content = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  text-align: center;
  max-width: 460px;
  text-align: center;
  margin: 0px auto;
  padding: 20px 20px 80px;
  display: grid;
  gap: 20px;
  z-index: 1;
  color: ${themes.light.text2};
  mix-blend-mode: normal;
`
