import React from 'react'
import Profile from '../assets/profile.jpg'
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
      <div id="home" className='bg-[#212121] flex md:flex-row flex-col'>
        <div className="grow-0 md:w-6/12 w-2/4 md:shrink mx-auto md:mx-0 md:p-20 text-center">
          <img className="rounded md:rounded-[20px] rounded-[100%]" src={Profile} alt="profile"></img>
        </div>
        <div className='grow-0 md:w-12/12 md:mx-auto md:shrink my-0 md:my-auto font-bold text-center md:text-left text-rose-500 text-lg md:text-xl lg:text-xl'>            
          <Typewriter
              onInit={(typewriter) => {
                  typewriter
                      .typeString("NONTASAB SIANGCHIN")
                      .pauseFor(1000)                      
                      .start();
              }}
            />    
            <p className='text-white md:text-lg2 font-medium'>
              Frontend Developer.
            </p>
            <hr></hr>
        </div>
      </div>
      
  )
}

export default Header
