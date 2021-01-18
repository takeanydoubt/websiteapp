import React from "react"
import styled from "styled-components"
import StripeChekout from "react-stripe-checkout"

function PricingSection() {
  const handlePurchase = token => {
    const amount = 1000000
    const description = " My awesome project"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch("http://localhost:9000/stripe-charge", {
      method: "POST",
      body: JSON.stringify(bodyObject),
    })
  }

  return (
    <Hero>
      <CardHero>
        <DailyCard>
          <Title>Daily</Title>
          <SubTitle>R60</SubTitle>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Access to contents
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Unlimited Papers and Memorandum{" "}
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            2x Quiz
          </Text>
          <StripeChekout
            amount={5000}
            image="https://share.getcloudapp.com/xQuY1QWg"
            token={handlePurchase}
            stripeKey="pk_test_UhQ3QelLyQCC3uvuT6FyJLXC00cSqTXc0l"
          >
            <Button>
              <img alt="" src="images/icons/check-blue.svg" />
              Subscribe
            </Button>
          </StripeChekout>
        </DailyCard>
        <MontlyCard>
          <Title>Monthly</Title>
          <SubTitle>R800</SubTitle>

          <Text>
            <img alt="" src="images/icons/check.svg" />
            4h Online classes
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Access to contents
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Unlimited Papers and Memorandum
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Unlimited Quiz{" "}
          </Text>
          <Button>
            <img alt="" src="images/icons/check-blue.svg" />
            Subscribe
          </Button>
        </MontlyCard>
        <WeeklyCard>
          <Title>Weekly</Title>
          <SubTitle>R260</SubTitle>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            1h Online class
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            Unlimited Papers and Memorandum{" "}
          </Text>
          <Text>
            <img alt="" src="images/icons/check.svg" />
            8x Quiz
          </Text>
          <Button>
            <img alt="" src="images/icons/check-blue.svg" />
            Subscribe
          </Button>
        </WeeklyCard>
      </CardHero>
    </Hero>
  )
}

export default PricingSection

const Hero = styled.div`
  margin: 0 auto;
`
const CardHero = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin-right: 50px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
`
const DailyCard = styled.div`
  width: 360px;
  height: 426px;
  background: linear-gradient(
    184.82deg,
    rgba(0, 0, 0, 0.6) 3.89%,
    rgba(0, 0, 0, 0.91) 96.11%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;

  @media (max-width: 640px) {
    margin-left: 20px;
    width: 335px;
    height: 426px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    width: 335px;
    height: 426px;
  }
`
const WeeklyCard = styled.div`
  width: 380px;
  height: 519px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 60px 0px 60px 60px;
  @media (max-width: 640px) {
    margin-left: 20px;
    width: 335px;
    height: 423px;
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    width: 335px;
    height: 426px;
  }
`
const MontlyCard = styled.div`
  width: 380px;
  height: 519px;
  background: linear-gradient(180deg, #3899cf 5.95%, #5b3c87 60.8%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 60px 60px 60px 0px;
  @media (max-width: 640px) {
    margin-left: 20px;
    width: 335px;
    height: 519px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    width: 335px;
    height: 426px;
  }
`
const Title = styled.h1`
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 72px;
  color: white;
  text-align: center;
`
const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 72px;
  color: white;
  text-align: center;
`

const Text = styled.p`
  margin-left: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  /* font-weight: bold; */
  font-size: 15px;
  line-height: 28px;

  img {
    margin: 0 8px -6px 10px;
    border-style: none;
  }
`
const Button = styled.button`
  width: 169px;
  height: 50px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  font-size: 17px;

  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  cursor: pointer;
  margin: 60px 0px 0 100px;

  img {
    margin: 0 8px -6px 10px;
    border-style: none;
  }

  @media (max-width: 640px) {
    margin: 20px 0px 0 100px;
  }
  @media (max-width: 768px) {
    margin: 20px 0px 0 100px;
  }
`
