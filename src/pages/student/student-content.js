import React from "react"
import styled from "styled-components"

import SEO from "../../components/layout/seo"
import StudentContentPage from "../../components/sections/StudentContentPage"
import StudentTool from "../../components/toolkit/StudentTool"

const StudentContent = () => {
  return (
    <Hero>
      <SEO title="student-content" />
      <StudentTool />
      <StudentContentPage />
    </Hero>
  )
}

export default StudentContent

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding-bottom: 300px;
`
