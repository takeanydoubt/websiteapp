import React from "react"
import styled from "styled-components"
import SEO from "../../components/layout/seo"
import StudentAccount from "../../components/sections/StudentAccount"
import StudentTool from "../../components/toolkit/StudentTool"

const Settings = () => {
  return (
    <Wrapper>
      <SEO title="settings" />
      <StudentTool />
      <StudentAccount />
    </Wrapper>
  )
}

export default Settings

const Wrapper = styled.div`
  /* margin: 0 auto; */
`
