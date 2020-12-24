import React from "react"
import styled from "styled-components"

const TeamCard = props => {
  return (
    <Wrapper>
      <WrapperContent>
        <Icon src={props.icon} />
        <Title>{props.title}</Title>
        <Role>{props.role}</Role>
      </WrapperContent>
    </Wrapper>
  )
}

export default TeamCard

const Wrapper = styled.div`
  width: 240px;
  height: 330px;
  background: linear-gradient(180deg, #3913b8 0%, #336cc1 100%);
  border-radius: 20px;
  @media (max-width: 640px) {
    width: 240px;
  }
`
const WrapperContent = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 50px;
`
const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
const Title = styled.h2`
  background: linear-gradient(
    104.74deg,
    rgb(176, 30, 255) 0%,
    rgb(225, 70, 124) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 700;
`
const Role = styled.p`
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`
