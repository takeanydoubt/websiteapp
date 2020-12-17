import React from "react"
import styled from "styled-components"
const SearchBar = () => {
  return (
    <Wrapper>
      <GroupWrapper>
        <Input placeholder="What subject do you need help with?(e.g. 'Calculs') "></Input>
        <IconWrapper>
          <Icon src="images/icons/search.svg" />
        </IconWrapper>
      </GroupWrapper>
    </Wrapper>
  )
}

export default SearchBar

const Wrapper = styled.div`
  /* margin-right: 200px; */
  padding: 180px 30px;

  @media (max-width: 640px) {
    margin: 0 0px 0 0;
    padding: 0 auto;
  }
`

const Input = styled.input`
  margin-left: 60px;
  width: 504px;
  height: 44px;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: text;
  @media (max-width: 640px) {
    width: 260px;
    height: 44px;
    font-size: 10px;
  }
`

const GroupWrapper = styled.div`
  width: 504px;
  height: 46px;
  background: rgb(255, 255, 255);
  border-radius: 30px;
  position: relative;

  @media (max-width: 640px) {
    width: 260px;
    height: 46px;
  }
`

const Icon = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 8px;
  left: 8px;
`
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  position: absolute;
  top: 3px;
  left: 5px;
`
