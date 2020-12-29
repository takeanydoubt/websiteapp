import React from "react"
// import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo"
import styled from "styled-components"
import PricingSection from "../components/sections/PricingSection"
import Layout from "../components/layout/layout"
import { themes } from "../components/styles/ColorStyles"

function Pricing() {
  return (
    <WrapperTheme>
      <Wrapper>
        <SEO title="pricing" />
        <Layout>
          <WrapperText>
            <Title>Pricing Plans</Title>
            <Content>
              Online tutoring with tutors from all around South Africa.
            </Content>
          </WrapperText>
          <PricingSection />
        </Layout>
      </Wrapper>
    </WrapperTheme>

    // </Layout>
  )
}
export default Pricing

const WrapperTheme = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/course-wave3.svg");
`

const WrapperText = styled.div`
  padding: 200px 0 0 0;
`
const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${themes.dark.text1};
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
  color: ${themes.dark.text2};
  mix-blend-mode: normal;
`
