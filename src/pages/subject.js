import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { H3 } from "../components/styles/TextStyles"
import { engineeringData, scienceData } from "../data/SubjectData"
const Subject = () => {
  return (
    <Wrapper>
      <SEO title="subject" />
      <Layout>
        <Title>All TakeAnyDoubt Subjects</Title>
        <Category>
          <Engineering>
            <Link style={{ fontSize: "24px", color: "white" }} to="">
              Engineering
            </Link>
            <Rows>
              {engineeringData.map(item => (
                <Link key={item} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </Rows>
          </Engineering>
          <Science>
            <Link style={{ fontSize: "24px", color: "White" }}>Science</Link>
            <Rows>
              {scienceData.map(item => (
                <Link key={item} to={item.link} to="">
                  {item.title}
                </Link>
              ))}
            </Rows>
          </Science>
        </Category>
      </Layout>
    </Wrapper>
  )
}

export default Subject

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);
`

const Category = styled.div`
  padding: 80px 0 0 0;
  justify-content: center;
  display: grid;
  grid-template-rows: 24px;
  gap: 340px;
  @media (max-width: 640px) {
    padding: 220px 0px 0px 60px;
    gap: 380px;
  }
`
const Rows = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 340px 340px 340px;
  gap: 20px;

  a {
    color: cyan;
    font-weight: normal;
  }

  @media (max-width: 640px) {
    grid-template-columns: 240px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 240px 240px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 240px 240px;
  }
`

const Engineering = styled.div`
  font-size: 15px;
`
const Science = styled.div`
  font-size: 15px;
`
const Title = styled(H3)`
  padding: 200px 0 0 0;
  text-align: center;
  color: white;
`
