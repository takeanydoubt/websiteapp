import React from "react"
import styled from "styled-components"

const SelectButton = props => {
  return (
    <ButtonGroup>
      <Text1> {props.firstButton}</Text1>

      <Text2>{props.secondButton}</Text2>
    </ButtonGroup>
  )
}
export default SelectButton

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto 30px auto;
  width: 213px;
  height: 50px;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
`

const Text1 = styled.p`
  width: 98px;
  height: 35px;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 7.5px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  background: #ffffff;
  padding: 10px;

  text-align: center;
`
const Text2 = styled.p`
  width: 98px;
  height: 35px;

  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  background: transparent;
  padding: 10px;
`
