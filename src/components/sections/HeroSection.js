import React from "react"
import styled from "styled-components"
// import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import SearchBar from "./SearchBar"

function HeroSection() {
  return (
    <WrapperWave>
      <Wrapper>
        <SearchBar />
        <ContentWrapper>
          {/* <TextWrapper> */}
          {/* <Title> */}
          {/* It's time
              <br /> for better <br />
              IQ & grades */}
          {/* </Title> */}

          {/* <Description> */}
          {/* Online tutoring with tutors from all around South Africa. */}
          {/* </Description> */}
          {/* <PurchaseButton
              title="Start Learning"
              subtitle=" online tutoring"
            /> */}

          {/* <Descript> */}
          {/* Get your online class for R100 +R10, Purchase includes access to
              any subject, more than 1000+ premium content, 24 hours of
              tutoring, source files and memos. */}
          {/* </Descript> */}
          {/* </TextWrapper> */}
        </ContentWrapper>
      </Wrapper>
    </WrapperWave>
  )
}

export default HeroSection

const WrapperWave = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(1, 1fr); */
  background: url("/images/waves/hero-wave1.svg");

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;

  @media (max-width: 640px) {
    margin: 0 auto;
    padding: 120px 0 10px 0;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  grid-gap: 30px;
`
const Title = styled(H1)`
  margin-left: 20px;
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
  margin-left: 20px;
  color: ${themes.dark.text1};
`

const Descript = styled.p`
  font-size: 15px;
  line-height: 130%;
  color: ${themes.dark.text1};
  margin-left: 20px;
`
