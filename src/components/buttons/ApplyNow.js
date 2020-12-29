import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ApplyNow = () => {
  return (
    <Link to="/apply">
      <Wrapper>Apply Now</Wrapper>
    </Link>
  )
}

export default ApplyNow

const Wrapper = styled.div`
  margin: 40px auto;
  width: 280px;
  height: 77px;
  padding: 12px;
  /* background-color: #5cb85c; */
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(250, 255, 255, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  text-transform: uppercase;
  display: grid;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
`
