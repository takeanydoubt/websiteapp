import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"

export default function SectionX() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Comming Soon</Title>
        <SubTitle> This page is not available yet.</SubTitle>

        <Link to="/tutor-application">
          <ApplyButton>Apply Now</ApplyButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0px auto;
`
const ContentWrapper = styled.div`
  background: url("/images/waves/hero-wave.svg");
  padding: 152px 0 0px 0;
`
const Title = styled(H2)`
  color: white;
  text-align: center;
  padding: 40px 0 0 0;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`
const SubTitle = styled(H3)`
  text-align: center;
  color: white;
  padding: 40px 0;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`
const ApplyButton = styled.button`
  display: grid;
  margin: 0 auto;
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  font-size: 28px;
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
    width: 200px;
    height: 60px;
    font-size: 18px;
  }
`
