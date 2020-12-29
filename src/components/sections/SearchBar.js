import React, { useState } from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1 } from "../styles/TextStyles"

const SearchBar = () => {
  const [input, setInput] = useState("")
  const [visible, setVisible] = useState(false)

  let subjects = [
    { name: "Engineering Mathematics", course: "Mechanical Engineering" },
    { name: "Construtation", course: "Civil Engineering" },
    { name: "Programming", course: "Computer Systems Engineering" },
    { name: "Electrinics ", course: "Eletrical Engineering" },
    { name: "Data Analytics", course: "Computer Science" },
  ]

  function handleChange(event) {
    event.preventDefault()
    setInput(event.target.value)
  }

  if (input.length > 0) {
    subjects = subjects.filter(i => {
      return i.name.match(input)
    })
  }

  return (
    <WrapperMain>
      <Title>Improve your grades</Title>
      <Subtitle>
        Online tutoring with tutors from all around South Africa.
      </Subtitle>
      <Wrapper>
        <GroupWrapper>
          <Input
            type="text"
            placeholder="What is the subject you need help with?
          (e.g. 'Calculs') "
            onChange={handleChange}
            value={input}
            onClick={() => setVisible(!visible)}
          />

          <IconWrapper>
            <Icon src="images/icons/search.svg" />
          </IconWrapper>
        </GroupWrapper>

        {visible ? (
          <WrapperHero>
            {subjects.map((subject, index) => (
              <Text key={index}>
                {subject.name} -{subject.course}
              </Text>
            ))}
          </WrapperHero>
        ) : null}
      </Wrapper>
    </WrapperMain>
  )
}

export default SearchBar

const WrapperMain = styled.div`
  margin: 0 auto;
  padding: 280px 0px 0px 0px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 600px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: 300px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 300px;
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
  @media (max-width: 1024px) {
    width: 260px;
    height: 44px;
    font-size: 10px;
  }
  @media (max-width: 768px) {
    width: 260px;
    height: 44px;
    font-size: 10px;
  }

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
    /* width: 260px;
    height: 46px; */
    display: none;
  }
  @media (max-width: 768px) {
    width: 260px;
    height: 46px;
  }
  @media (max-width: 1024px) {
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

const WrapperHero = styled.div`
  width: 570px;
  height: 300px;
  background: rgb(255, 255, 255, 0.7);
  border-radius: 30px;
`
const Text = styled.p`
  display: grid;
  padding: 30px 0 0 20px;
`

const Title = styled(H1)`
  margin: 0 0 40px 0;
  text-align: center;

  color: ${themes.dark.text1};
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    text-align: center;
  }
`

const Subtitle = styled.p`
  margin: 0 0 40px 0;
  text-align: center;
  color: white;
  font-size: 18px;
  @media (max-width: 640px) {
    font-size: 12px;
    margin: 0 30px 0 30px;
  }
`
