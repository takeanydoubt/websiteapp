import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import TeamSection from "../components/sections/TeamSection"
import { themes } from "../components/styles/ColorStyles"
const Team = () => {
  return (
    <Wrapper>
      <SEO title="team" />
      <Layout>
        <Title>Meet the Team</Title>
        <TeamSection />
      </Layout>
    </Wrapper>
  )
}

export default Team

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);
`
const Title = styled.h1`
  padding: 200px 0 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${themes.light.text2};
  color: white;
`
