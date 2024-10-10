import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Icon from '../../assets/logo.png';
import Image from '../../assets/herohai.png';
import "./Hero.css"

export const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (animate) {
      gsap.timeline()
        .from('.hero-title', {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        .from('.hero-context-left', {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        .from('.hero-context-right', {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        });
    }
  }, [animate]);

  return (
    <div className="parent h-screen flex flex-col">
      <div className="navbar flex flex-row justify-between px-10 py-4 md:py-6 lg:py-8">
        <div className="nav-left flex flex-row justify-center items-center gap-5">
          <img src={Icon} alt="Icon" className='icon w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
          <div className="head flex justify-center items-center text-2xl md:text-3xl lg:text-4xl text-blue-800 font-semibold">
            <span >SIGKDD <br /> STUDENT CHAPTER</span>
          </div>
        </div>
        <div className="nav-right flex items-start">
          <button className="btn text-white text-2xl md:text-2xl lg:text-2xl font-semibold">Register</button>
        </div>
      </div>
      <div className={`hero flex flex-col flex-1 gap-10 px-24 h-1/2 ${animate ? 'animate' : ''}`}>
        <div className="hero-title flex flex-col w-full text-4xl md:text-5xl lg:text-6xl">
          <span className='flex justify-start '>HACK OF</span>
          <span className="flex justify-end">DUTY</span>
        </div>
        <div className="hero-context flex flex-row w-full">
          <div className="hero-context-left flex flex-col gap-2 items-center justify-center text-9xl md:text-[12rem] lg:text-[15rem]">
            <span>28-29</span>
            <span>OCTOBER</span>
          </div>
          <div className="hero-context-right px-24">
            <button className='btn-2 px-4 py-2 bg-orange-200 text-xl md:text-2xl lg:text-3xl'>Register Now</button>
          </div>
        </div>
      </div>
      <img src={Image} alt="Image" className='image absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2' />
    </div>
  );
};

export default Hero;