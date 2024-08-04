import React from 'react'
import logo from "../../public/images/Group 77.png"

const Hero = () => {
  return (
    <section className='hero'>
      <img className='hero__img' src={logo} alt="image group" />
      <h1 className='hero__header'>Online Experiences</h1>
      <p className='hero__text'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}

export default Hero
