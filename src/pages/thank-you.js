import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function AlertMessage() {
  return (
    <Wrapper>
      <Card>
        <h1>Thank you!</h1>
        <p>Your application submission has been received.</p>
        <Link to="https://takeanydoubt.com">Back to takeanydoubt</Link>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 80px;
  background: rgb(14, 30, 37);
  height: 1024px;
  display: grid;
  grid-template-columns: 400px;
  justify-content: center;
`
const Card = styled.div`
  width: 400px;
  height: 250px;
  background: white;
  border-radius: 10px;

  h1 {
    font-size: 32px;
    color: rgb(14, 30, 37);
    line-height: 44px;
    margin: 20px 20px 20px 20px;
  }
  p {
    font-size: 18px;
    color: black;
    line-height: 32px;
    margin: 20px 20px 20px 20px;
  }

  a {
    font-size: 18px;
    padding: 20px 20px 20px 20px;
    line-height: 22px;
  }
`
