import React from "react"
import SEO from "../../components/layout/seo"
import styled from "styled-components"
import StudentTool from "../../components/toolkit/StudentTool"
export default function IndexPage() {
  return (
    <Wrapper>
      <SEO title="classroom" />
      <StudentTool />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`
