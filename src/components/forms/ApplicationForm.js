import React from "react"
import styled from "styled-components"
import Select from "react-select"

const ApplicationForm = () => {
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]

  const cus = {
    color: "red",
  }
  return (
    <Form>
      <FormTitle>Apply for Tutor</FormTitle>
      <FormDescription>
        Existing customer? Get help with technical issues and general questions
        by visiting our community.
      </FormDescription>
      <Input placeholder="Your name" />
      <Input placeholder="Surname" />

      <Select options={options} />
      {/* <Select>
        <Option value disabled selected>
          Please Select
        </Option>
        <Option>What best describes your job functions?</Option>
        <Option>What best describes your job functions?</Option>
        <Option>What best describes your job functions?</Option>
      </Select>
      <Select>
        <Option>What best describes your job functions?</Option>
        <Option>What best describes your job functions?</Option>
        <Option>What best describes your job functions?</Option>
        <Option>What best describes your job functions?</Option>
      </Select> */}
    </Form>
  )
}

export default ApplicationForm

const Form = styled.form`
  padding: 20px 0 0 0;
  width: 490px;
  height: 700px;
  border-radius: 8px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 40px rgba(14, 30, 37, 0.16);
  color: rgba(14, 30, 37, 0.8);
`
const FormTitle = styled.h1`
  font-size: 34px;
  color: #0e1e25;
  font-weight: 500;
  margin: 20px 40px 20px 40px;
`
const FormDescription = styled.p`
  color: #0e1e25;
  margin: 20px 40px 20px 40px;
  line-height: 35px;
`
const Input = styled.input`
  margin: 20px 30px 20px 30px;
  background-color: #fff;
  border: 2px solid rgba(14, 30, 37, 0.09);
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  color: #0e1e25;
  width: 430px;
  height: 40px;
  outline: none;

  ::placeholder {
    font-size: 15px;
  }
`

// const Select = styled.Select`
//   width: 430px;
//   height: 40px;
// `

// const Option = styled.option`
//   width: 430px;
//   height: 40px;
// `
