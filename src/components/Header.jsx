import React from 'react'
import Profile from '../assets/profile.jpg'
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
      <div id="home" className='bg-[#212121] flex md:flex-row flex-col'>
        <div className="grow-0 md:p-20 md:shrink md:mx-0 mx-auto text-center">
          <img className="rounded md:rounded-[20px] rounded-[100%] mx-auto w-2/4 md:w-auto" src={Profile} alt="profile"></img>
        </div>
        <div className='grow-0 md:w-[600px] md:shrink my-0 md:my-auto md:mx-auto font-bold text-center md:text-left text-rose-500 text-lg md:text-xl lg:text-xl'>            
          <Typewriter
              onInit={(typewriter) => {
                  typewriter
                      .typeString("NONTASAB SIANGCHIN")
                      .pauseFor(1000)                      
                      .start();
              }}
            />    
            <p className='text-white md:text-xl font-medium h-24 md:h-auto'>
              Frontend Developer.
            </p>
        </div>
      </div>
      
  )
}

export default Header
