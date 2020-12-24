import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"

export default function ApplySection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Do you enjoy teaching and want a flexible way to make extra cash?
        </Title>
        <SubTitle>Join our community of tutors!</SubTitle>

        <Link to="/upcoming">
          <ApplyButton>Apply Now</ApplyButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`
const ContentWrapper = styled.div`
  padding: 220px 0 0 0;
`
const Title = styled(H2)`
  margin: 30px 0 30px 0;
  text-align: center;
  color: white;

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 40px;
  }
`
const SubTitle = styled(H3)`
  margin: 30px 0 50px 0;
  text-align: center;
  color: white;

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 40px;
  }
`
const ApplyButton = styled.button`
  margin-left: 600px;
  width: 200px;
  height: 60px;
  padding: 12px;
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: 1s;

  :hover {
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    margin-left: 100px;
    font-size: 18px;
  }
`
