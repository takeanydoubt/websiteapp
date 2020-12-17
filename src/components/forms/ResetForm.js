import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function ResetForm() {
  return (
    <Wrapper>
      <MyForm>
        <FormGroup>
          <Title>Set password</Title>
          <Subtitle>
            Enter the email address associated to your TakeAnyDoubt account. We
            will send you a link to set your password.
          </Subtitle>

          <FormElement>
            <Icon alt="" src="images/icons/email.svg" />
            <Input placeholder="Email address"></Input>
          </FormElement>

          <SignUpButton>Set password</SignUpButton>
          <Description>
            <Link to="/signin">Sign in</Link>
          </Description>
        </FormGroup>
      </MyForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 460px;
  height: 610px;
  background: rgba(50, 61, 109, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  opacity: ${props => (props.isOpen ? 8 : 1)};
  z-index: 1;

  @media (max-width: 640px) {
    width: 320px;
    height: 510px;
  }
`

const MyForm = styled.div`
  margin: 20px auto;
`
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`
const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: white;
  line-height: 180%;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`
const FormGroup = styled.div`
  width: 320px;
  height: 388.5px;
  display: grid;
  grid-gap: 1px;
  color: white;
  margin: 50px 0 0px 0;
  @media (max-width: 640px) {
    width: 300px;
    height: 380px;
  }
`

const FormElement = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;
  position: relative;

  @media (max-width: 640px) {
    width: 290px;
    height: 44px;
  }
`

const Input = styled.input`
  margin-left: 60px;
  color: white;
  font-weight: normal;
  font-size: 15px;
  width: 250px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: 30px;
  outline: none;
`
const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
`
const SignUpButton = styled.button`
  width: 320px;
  height: 44px;
  left: 0px;
  top: 284px;
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
  color: rgb(250, 250, 250);
  font-weight: 600;
  outline: none;
  border: none;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;

  @media (max-width: 640px) {
    width: 290px;
    height: 46px;
  }
`
const Description = styled.p`
  color: white;
  font-weight: normal;
  font-size: 12px;

  a {
    color: rgb(47, 184, 255);
    font-weight: bold;
    text-decoration: none;
    margin: 0px 0px 0px 5px;
    cursor: pointer;
  }
`
