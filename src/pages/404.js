import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import { Link } from "gatsby"
function NotFoundPage() {
  return (
    <Wrapper>
      <Layout>
        <SEO title="404: Not found" />
        <h3>Wrong turn?</h3>
        <p>We can't seem to find the page you're looking for.</p>
        <ul style={{ color: "white", fontSize: "22px" }}>
          This may have been caused by:
          <li>1. a mistyped address</li>
          <li>2. an out-of-date link</li>
        </ul>

        <ul style={{ color: "white", fontSize: "22px" }}>
          Here are helpful links instead:
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/apply">Become a Tutor</Link>
          </li>
        </ul>
      </Layout>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);

  h3 {
    padding: 220px 0 0 0;
    font-size: 60px;
    color: white;
    text-align: center;
  }

  p {
    margin: 28px 0;
    font-size: 24px;
    text-align: center;
    color: white;
  }

  ul {
    margin: 28px 0;
    text-align: center;

    li {
      margin: 23px 0;
      font-size: 22px;
    }
  }

  a {
    color: cyan;
  }

  @media (max-width: 640px) {
    h1 {
      line-height: 60px;
    }

    p {
      line-height: 40px;
    }

    a {
      color: cyan;
    }
  }
`
