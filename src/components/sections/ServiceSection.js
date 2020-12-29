import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

const Card = props => {
  return (
    <Hero>
      <CardText>
        <TitleCard>{props.title}</TitleCard>
        <DescriptionCard>{props.description}</DescriptionCard>
        <DescriptionCard>{props.description1}</DescriptionCard>
        <DescriptionCard>{props.description2}</DescriptionCard>
        <DescriptionCard>{props.description3}</DescriptionCard>
      </CardText>
    </Hero>
  )
}

const TeamSection = () => {
  return (
    <Wrapper>
      <Title>Our services</Title>
      <TextWrapper>
        <Subtitle>Affordable packages</Subtitle>
        <Subtitle>1on1 direct tutoring</Subtitle>
      </TextWrapper>
      <CardGroup>
        <Card
          title="Daily"
          description="Access to contents"
          description1=" Unlimited Papers and Memorandum"
          description2="2x Quiz"
          description3="Valid for 24 hours"
        />
        <Card
          title="Weekly"
          description="1h Online class"
          description1=" Unlimited Papers and Memorandum"
          description2="8x Quiz"
          description3="Valid for 7 days"
        />
        <Card
          title="Montly"
          description="4h Online classes"
          description1="Access to contents"
          description2="Unlimited Papers and MemorandumUnlimited Quiz"
          description3="Valid for 30 days"
        />
        <Card
          title="Once off purcharse"
          description="Online class"
          description1="Unlimited time"
        />
      </CardGroup>
    </Wrapper>
  )
}

export default TeamSection

const Wrapper = styled.div`
  padding: 100px 0 100px 0;

  @media (max-width: 640px) {
    grid-template-columns: 240px;
    padding: 20px 0 100px 0;
  }
`

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 240px 240px 240px 240px;
  justify-content: center;
  gap: 70px;
  @media (max-width: 1024px) {
    grid-template-columns: 240px 240px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 240px 240px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 240px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  justify-content: space-around;
  margin: 0 20px 40px 80px;

  @media (max-width: 640px) {
    grid-template-columns: 300px;
    justify-content: center;
    line-height: 40px;
  }
`
const Title = styled.div`
  font-weight: 700;
  color: ${themes.light.text2};
  font-size: 34px;
  text-align: center;
  padding: 20px 0 70px 0;
  @media (max-width: 640px) {
    padding: 10px 0 40px 0;
  }
`
const Subtitle = styled.div`
  font-size: 22px;
  color: ${themes.light.text1};

  @media (max-width: 640px) {
    font-size: 18px;
    margin: 0 40px 0 40px;
  }
`

/************************CARD STYLING ********************************* */
const Hero = styled.div`
  width: 240px;
  height: 330px;
  background: linear-gradient(180deg, #3913b8 0%, #336cc1 100%);
  border-radius: 20px;
`
const CardText = styled.div`
  margin: 0 auto;
`
const TitleCard = styled.h1`
  padding: 20px 0 20px 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`
const DescriptionCard = styled.p`
  font-size: 14px;
  padding: 0px 40px 20px 40px;
  color: rgb(255, 255, 255, 0.7);
`
