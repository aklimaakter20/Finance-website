import { Button } from '@nextui-org/react'
import React from 'react'
import HeroImg from '../assets/hero.png'
function Hero() {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-10 lg:mt-20 xl:mt-12'>
<div className='space-y-6'>
    <h1 className='font-bold leading-tight text-2xl sm:text-3xl md:text-4xl xl:text-5xl pb-3 sm:pb-6 '>Spend your Cardano anywhere, anytime.</h1>
    <p className='text-xs text-secondary w-4/5 lg:text-sm xl:text-base'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
    <Button variant='solid' color='primary' radius='full'>Get Started</Button>
</div>
<div>
    <img className='lg:ml-40' src={HeroImg} alt="" />
</div>
      
    </section>
  )
}

export default Hero
