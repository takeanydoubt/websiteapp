import React, { useState, useEffect } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import SemiHeroSection from "../components/sections/SemiHeroSection"
import EdgeHero from "../components/sections/EdgeHero"
import HeroProfile from "../components/sections/HeroProfile"
import { window } from "browser-monads"
import Mission from "../components/sections/MissionSection"
import BeTutor from "../components/sections/BecomeTutor"
import ServiceSection from "../components/sections/ServiceSection"
const MainLayout = () => {
  return (
    <Layout>
      <SEO title="home" />
      <HeroSection />
      <Mission />
      <SemiHeroSection />
      <BeTutor />
      <ServiceSection />
      <EdgeHero />
    </Layout>
  )
}

const MainLayout2 = () => {
  return (
    <Layout>
      <SEO title="home" />
      <HeroSection />
      <Mission />
      <SemiHeroSection />
      <BeTutor />
      <ServiceSection />
      <EdgeHero />
      <HeroProfile />
    </Layout>
  )
}

function IndexPage() {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:640px)").matches
  )

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:640px)").matches)
    })
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:720px)").matches)
    })
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:1234px)").matches)
    })
  })

  return <>{isMobile ? <MainLayout /> : <MainLayout2 />}</>
}

export default IndexPage
