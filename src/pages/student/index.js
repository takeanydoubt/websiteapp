import React from "react"
import SEO from "../../components/layout/seo"
import StudentHome from "../../components/sections/StudentHome"
import styled from "styled-components"
export default function IndexPage() {
  return (
    <Wrapper>
      <SEO title="home" />
      <StudentHome />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`
