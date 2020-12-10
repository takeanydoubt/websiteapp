import React from "react"
import styled from "styled-components"

const TutorForm = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Profile></Profile>
        <Form>
          <Field>
            <Label>First name</Label>
            <Input />
          </Field>

          <Field>
            <Label>Last name</Label>
            <Input />
          </Field>

          <Field>
            <Label>Email address</Label>
            <Input />
          </Field>

          <Field>
            <Label>Date of Birth</Label>
            <Input type="date" id="birthday" name="birthday" />
          </Field>

          <Field>
            <Label>Country of Birth</Label>
            <Input />
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input />
          </Field>

          <Field>
            <Label>Occupation</Label>
            <select>
              <option value="select">{}</option>
              <option selected value="student">
                Student
              </option>
              <option>Self employee</option>
              <option>Employee</option>
            </select>
          </Field>

          <Field>
            <Label role="button">Subject of Interest</Label>
            <select>
              <option selected value="select">
                {}
              </option>
              <option selected value="fluid">
                Fluid Mechanics
              </option>
              <option value="maths">Engineering Mathematics</option>
              <option value="drawing">Drawing</option>
            </select>
          </Field>
          <Field>
            <Label role="button">Education </Label>
            <select>
              <option selected value="select">
                {}
              </option>
              <option selected value="cput">
                Cape Peninsula University of Technology
              </option>
              <option value="uct">University of Cape Town</option>
              <option value="up">University of Pretoria</option>
              <option value="uj">University of Johanesburg</option>
            </select>
          </Field>

          <Field>
            <Label>Gender</Label>
            <select>
              <option velue="select">{}</option>
              <option velue="male">Male</option>
              <option velue="female">Female</option>
            </select>
          </Field>

          <Field>
            <Label>Tutoring Preference</Label>
            <select>
              <option velue="select">{}</option>
              <option velue="male">Online</option>
              <option velue="female">In Person</option>
            </select>
          </Field>

          <Field>
            <Label>Profile Photo</Label>
            <InputUpload type="file" id="myfile" name="myfile" />
          </Field>
        </Form>

        <ApplyButton>Apply</ApplyButton>
      </FormWrapper>
    </Wrapper>
  )
}

export default TutorForm

const Wrapper = styled.div`
  margin: 0 auto;
  background: url("/images/waves/wave-focus.svg");
  padding: 160px 0 100px 0;
`
const FormWrapper = styled.div`
  padding: 40px 0;
`

const Form = styled.div`
  margin: 60px 400px 0 400px;
  display: grid;
  grid-template-columns: 350px 350px;
  gap: 30px;
`

const Field = styled.div`
  select {
    margin: 10px 0;
    width: 310px;
    height: 44px;
    outline: none;
    font-size: 15px;
  }
`
const Label = styled.label`
  color: darkgray;
  text-transform: uppercase;
`
const Input = styled.input`
  font-size: 22px;
  margin: 10px 0;
  font-size: 15px;
  width: 300px;
  height: 44px;
  outline: none;
`
const InputUpload = styled.input`
  font-size: 22px;
  margin: 10px 0;
  font-size: 18px;
  width: 300px;
  outline: none;
  color: white;
`

const Profile = styled.div`
  margin: 0 auto;
  background: rgba(50, 61, 109, 0.5);
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

const ApplyButton = styled.button`
  margin: 30px 650px;
  width: 200px;
  height: 50px;
  padding: 12px;
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: 1s;

  :hover {
    transform: translateY(-4px);
  }
`
