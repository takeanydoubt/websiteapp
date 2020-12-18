import React from "react"
import styled from "styled-components"

const TutorForm = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Profile></Profile>
        <Form
          name="application"
          className="form"
          action="/contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="application" />
          <Field>
            <Label>First name</Label>
            <Input required maxLength="20" type="name" />
          </Field>
          <Field>
            <Label>Last name</Label>
            <Input required maxLength="20" type="surname" />
          </Field>
          <Field>
            <Label>Email address</Label>
            <Input required maxLength="30" type="email" />
          </Field>
          <Field>
            <Label>Date of Birth</Label>
            <Input required type="date" id="birthday" name="birthday" />
          </Field>
          <Field>
            <Label>Country of Birth</Label>
            <Input required maxLength="20" type="country" />
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input required maxLength="20" type="phone" />
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

          <ApplyButton ty="submit">Apply</ApplyButton>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default TutorForm

const Wrapper = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #ff5775 -3.94%, #1f0a89 56.67%);

  /* padding: 160px 0 100px 0; */
`
const FormWrapper = styled.div`
  padding: 40px 0;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 350px 350px;
  justify-content: center;
  align-items: center;
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
  color: rgba(255, 255, 255);
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
  margin: 80px auto;
  background: rgba(50, 61, 109, 0.5);
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

const ApplyButton = styled.button`
  width: 200px;
  height: 50px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  display: grid;
  margin-left: 200px;
  border: none;
  padding: 10px;
`
