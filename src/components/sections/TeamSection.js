import React from "react"
import styled from "styled-components"
import TeamCard from "../../cards/TeamCard"

const TeamSection = () => {
  return (
    <Wrapper>
      <TeamCard
        icon="images/avatars/celso.jpg"
        title="Celso Adriano"
        role="CEO & Founder"
      />

      <TeamCard
        icon="images/avatars/suzana.jpg"
        title="Suzana António"
        role="Financial Manager"
      />

      <TeamCard
        icon="images/avatars/alberto.jpg"
        title="Alberto Almeida"
        role="CPO & Founder"
      />
    </Wrapper>
  )
}

export default TeamSection

const Wrapper = styled.div`
  padding: 100px 0 0 0;
  display: grid;
  grid-template-columns: 240px auto auto;
  gap: 60px;
  justify-content: center;

  @media (max-width: 640px) {
    grid-template-columns: 240px;
  }
`
