import React from 'react'
import Profile from '../assets/profile.jpg'
import Typewriter from "typewriter-effect";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div id="home" className='bg-[#212121] flex md:flex-row flex-col h-screen md:h-fit'>
        <div className="grow-0 p-5 md:p-20 mt-20 md:mt-0 md:shrink md:mx-0 mx-auto text-center">
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
          <div className='text-[1.2rem] my-5'>
            <Link to="https://drive.google.com/file/d/1tFLiQzYuMEsomgzqgjGw7t-6TY8AWnwg/view?usp=sharing" target="_blank">
              <button className='border-4 bg-transparent hover:bg-white duration-500 shadow-xl bg-about bg-center bg-contain bg-no-repeat rounded-[25px] p-3 text-white font-normal hover:text-rose-500'>
                  DOWNLOAD RESUME
              </button>
            </Link>
          </div>
        </div>
      </div>
      
  )
}

export default Header
