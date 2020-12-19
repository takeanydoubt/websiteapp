import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menoData, mobileData } from "../../data/MenuData"

function Laptop() {
  return (
    <Wrapper>
      <Link to="/">
        <Title>TakeAnyDoubt</Title>
      </Link>

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
    event.preventDefault()
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
  top: 55px;
  right: 10px;
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

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileHero = styled.div`
  position: absolute;
  right: 18px;
  top: 63px;
  width: 250px;
  height: 380px;
  background: #16145a;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`
const MenuItemMobile = styled.div`
  width: 200px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 24px auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  color: white;
  border-bottom: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid;

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  text-align: center;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
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
