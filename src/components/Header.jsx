/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Nav/Nav'
import HeroImage from '../assets/Hero.png';
const Header = () => {
  return (
    <section className='bg-Hero bg-cover bg-center h-screen py-4 md:px-24 px-4'>
        <Nav />
        <div className='flex md:flex-row flex-col gap-5 pt-20'>
            <div className='flex-1'>
                <h1 className='md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight leading-snug'>Be prepared for mountains and Beyond.</h1>
                <p className='text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed'>
                    Are you looking for amazing hiking travel? Don't Worry! We got it for you!
                </p>
            </div>
            <div className='flex-1 flex justify-center'>
                <img src={HeroImage} alt='Hero Image' className='h-2/3'/>
            </div>
        </div>
    </section>
  )
}

export default Header