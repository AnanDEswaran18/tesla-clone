import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      /> 
      <Section 
        title="Model Y"
        description="Order Online for Touchless delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory" 
      />
      <Section 
        title="Model 3"
        description="Order Online for Touchless delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory" 
      />
      <Section 
        title="Model X"
        description="Order Online for Touchless delivery"
        backgroundImage="model-x.jpg" 
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory" 
      />
      <Section
        title="Lowest Cost Solar Panels"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more" 
      />
      <Section
        title="Solar for new Roofs"
        description="Solar Roofs Costs Less than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more" 
      />
      <Section
        title="Accessories"
        description="Money-back guarantee"
        backgroundImage="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
 
`