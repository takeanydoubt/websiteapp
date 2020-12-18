import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menoData, mobileData } from "../../data/MenuData"
// import { window } from "browser-monads"

function Laptop() {
  return (
    <Wrapper>
      <Link to="/">
        <Title>TakeAnyDoubt</Title>
      </Link>
      {/* <img width="60px" alt="logo" src="/images/icons/tad.svg" /> */}
      <MenuWaWrapper>
        {menoData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>
              <img alt={item.title} src={item.icon} />
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </MenuWaWrapper>
      <Mobile />
    </Wrapper>
  )
}

const MobileList = () => {
  return (
    <MobileHero>
      {mobileData.map((item, index) => (
        <Link to={item.link} key={index}>
          <MenuItemMobile>
            <img alt={item.title} src={item.icon} />
            {item.title}
          </MenuItemMobile>
        </Link>
      ))}
    </MobileHero>
  )
}

function Mobile() {
  const [active, setActive] = useState(false)

  function HandleClick(event) {
    setActive(!active)
    // event.preventDefault()
  }

  return (
    <MobileMenu>
      <ButtonMobile onClick={event => HandleClick(event)}>
        {active ? "" : ""}
        <img alt="" src="/images/icons/hamburger.svg" />
        {active && <MobileList />}
      </ButtonMobile>
    </MobileMenu>
  )
}

export default function Header() {
  return <Laptop />

  // const [isMobile, setIsMobile] = useState(
  //   window.matchMedia("(max-width:640px)").matches
  // )

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setIsMobile(window.matchMedia("(max-width:640px)").matches)
  //   })
  // })

  // return <>{isMobile ? <Mobile /> : <Laptop />}</>
}

// ****************** Header ************************************************//
const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  padding: 40px 30px;
  align-items: center;
`
const MenuWaWrapper = styled.div`
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(4, auto);

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, auto);

    a {
      :nth-child(1) {
        display: none;
      }
    }

    a {
      :nth-child(2) {
        display: none;
      }
    }
    a {
      :nth-child(3) {
        display: none;
      }
    }
    a {
      :nth-child(4) {
        display: none;
      }
    }
  }
`

const MenuItem = styled.div`
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  display: grid;
  grid-template-columns: 24px auto;
  gap: 20px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  @media (max-width: 640px) {
    padding: 15px 0;
  }
`

// ****************** Mobile ************************************************//
const MobileMenu = styled.div`
  margin: 0 auto;
`
const ButtonMobile = styled.button`
  position: absolute;
  top: 60px;
  right: 0px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  width: 50px;
  height: 50px;
  border-radius: 90px;
  border: none;
  outline: none;
  img {
    border-style: none;
    width: 30px;
    height: 30px;
  }
`

const MobileHero = styled.div`
  position: absolute;
  right: 1px;
  top: 63px;
  width: 220px;
  height: 350px;
  background: #16145a;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`
const MenuItemMobile = styled.div`
  margin: 0 auto;
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  width: 180px;
  height: 50px;

  display: grid;
  grid-template-columns: 1px auto;
  align-items: center;
`

const Title = styled.h2`
  margin: 20px;
  text-align: center;
  padding: 10px;
  width: 134px;
  height: 44px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
`
