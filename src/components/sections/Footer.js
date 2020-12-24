import React from "react"
import styled from "styled-components"
import { footerData } from "../../data/MenuData"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <WrapperHero>
      <Wrapper>
        <WrapperItems>
          {footerData.map((item, index) => (
            <Link to={item.link} key={index}>
              <Items>
                <img alt={item.title} src={item.icon} />
                {item.title}
              </Items>
            </Link>
          ))}
        </WrapperItems>
        <WrapperText>
          <Text>Site made with React, Gatsby, Amazon AWS</Text>
          <Text>takeanydoubt © 2020</Text>
          <Text>
            <Link to="/privacy">Terms of Service - Privacy Policy</Link>
          </Text>
        </WrapperText>
      </Wrapper>
    </WrapperHero>
  )
}

export default Footer

const WrapperHero = styled.div`
  margin: 200px 0 0 0;
  width: 100%;
  background: url("/images/waves/footer-wave3.svg");
  padding: 10%;
  @media (max-width: 640px) {
    padding: 4%;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 660px;
  height: 300px;
  margin: 20px auto;
  /* background: #16145a; */
  @media (max-width: 640px) {
    margin: 80px auto;
    width: 300px;
    height: 450px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
const WrapperItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const WrapperText = styled.div`
  margin: 20px auto;
`
const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 40px;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 640px) {
    line-height: 30px;
  }

  a {
    color: rgb(255, 255, 255, 0.8);
  }
`

const Items = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
  color: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 24px auto;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  @media (max-width: 640px) {
    display: grid;
    gap: 20px;
    padding: 20px 0;
  }
`
