import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyle"

//What is working well
//How can we help them identify their  problems
//

export default function Test() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO title="test" />
      <h1>Testing Page </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 80px;
  display: grid;
  justify-content: center;
`
