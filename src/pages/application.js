import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { TabScrollButton } from "@material-ui/core"
import SEO from "../components/layout/seo"

const subjects = [
  { name: "Mathematics 1" },
  { name: "Fluid Mechanics 1" },
  { name: "Drawing 1 " },
]
const gender = [{ name: "Male" }, { name: "Female" }]
const roles = [
  { name: "Self  employee" },
  { name: "Student" },
  { name: "Employee " },
]
const education = [
  { name: "University Of  Cape Town" },
  { name: "StudenUniversity Of Pretoria" },
  { name: "University Of Johanesburg " },
  { name: "University Of Stelenbosh" },
  { name: "UWBC " },
  { name: "UNISA " },
]
const preference = [{ name: "Online" }, { name: "In Person" }]

const ApplicationForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [formState, setFormState] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    gender: "",
    preference: "",
    education: "",
    role: "",
  })

  function handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    event.preventDefault()
  }

  function handleInput(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.name,
    })
  }

  return (
    <Wrapper>
      <SEO title="application" />
      <WrapperContent>
        <Link to="/apply">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Title>Back to Application</Title>
      </WrapperContent>
      <WrapperForm
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Heading1> Tutor application form</Heading1>
        <Subtitle>
          Becomming tutor? Fill in the form to become tutor of our plataform by
          providing all the necessary informations and submite your application
          for review.
        </Subtitle>
        <Input
          onChange={handleInput}
          id="name"
          type="text"
          name="name"
          placeholder="First name"
        />
        <Input
          onChange={handleInput}
          id="lname"
          type="text"
          name="lname"
          placeholder="Last Name"
        />
        <Input
          onChange={handleInput}
          id="email"
          type="text"
          name="email"
          placeholder="Email "
        />
        <Input
          onChange={handleInput}
          id="phone"
          type="text"
          name="phone"
          placeholder="Phone "
        />
        <Input
          onChange={handleInput}
          id="country"
          type="text"
          name="country"
          placeholder="Country"
        />

        <Select
          onChange={handleInput}
          id="gender"
          type="txt"
          name="gender"
          value={subjects.gender}
        >
          <option selected value="Gender" disabled>
            Gender
          </option>
          {gender.map((newGender, index) => (
            <option>{newGender.name}</option>
          ))}
        </Select>
        <Select
          onChange={handleInput}
          id="role"
          type="txt"
          name="role"
          value={subjects.role}
        >
          <option selected value="Ocupation" disabled>
            Ocupation
          </option>
          {roles.map((role, index) => (
            <option key={index}>{role.name}</option>
          ))}
        </Select>
        <Select
          onChange={handleInput}
          id="subject"
          type="txt"
          name="subject"
          valeu={subjects.subject}
        >
          <option selected value="Subject" disabled>
            Subject of interest
          </option>
          {subjects.map((subject, index) => (
            <option key={index}>{subject.name}</option>
          ))}
        </Select>
        <Select
          onChange={handleInput}
          id="education"
          type="txt"
          name="education"
          value={subjects.education}
        >
          <option selected value="Education" disabled>
            Eduaction
          </option>
          {education.map((university, index) => (
            <option key={index}>{university.name}</option>
          ))}
        </Select>
        <Select
          onChange={handleInput}
          id="preference"
          type="txt"
          name="preference"
          valeu={subjects.preference}
        >
          <option selected value="Tutoring" disabled>
            Tutoring preference
          </option>
          {preference.map((mode, index) => (
            <option key={index} valeu={mode.name}>
              {mode.name}
            </option>
          ))}
        </Select>
        <SaveButton onSubmit={handleSubmit}>Submit</SaveButton>
      </WrapperForm>
    </Wrapper>
  )
}

export default ApplicationForm

const Wrapper = styled.div`
  position: absolute;
  top: 78px;
  left: 440px;
`
const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  padding: 0 0 40px 0;
`
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`
const Subtitle = styled.p`
  padding: 0px 40px 20px 40px;
  font-size: 15px;
  line-height: 22px;
`
const Heading1 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 40px 40px 20px 40px;
`
const BackButton = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  transform: rotateY(90deg) rotateY(90deg);
`

const WrapperForm = styled.form`
  width: 600px;
  height: 998px;
  background: white;
  border-radius: 10px;
`

const Input = styled.input`
  padding: 0 10px 0 10px;
  margin: 10px 30px 20px 30px;
  width: 88%;
  height: 44px;
  border-radius: 5px;
  border: solid 0.5px grey;
  outline: none;
  font-size: 18px;
  color: black;

  ::placeholder {
    color: rgb(1, 1, 1, 0.5);
    font-size: 15px;
  }
`

const Select = styled.select`
  margin: 10px 30px 20px 30px;
  width: 92%;
  height: 44px;
  border: none;
  outline: none;
  border-radius: 5px;
  border: solid 0.5px blue;
  font-size: 15px;
`
const SaveButton = styled.button`
  margin: 10px 30px 10px 30px;
  width: 92%;
  height: 44px;
  background-color: green;
  color: white;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`
