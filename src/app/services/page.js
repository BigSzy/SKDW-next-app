import React from 'react'
import ServicesHero from './ServiceHero'
import ServiceSection from './ServiceSection'
import ServiceGrid from './ServiceGrid'
import ServiceSection2 from './ServiceSection2'

function services() {
  return (
    <main>
      <ServicesHero/>
      <ServiceSection/>
      <ServiceGrid/>
      <ServiceSection2/>
    </main>
  )
}

export default services