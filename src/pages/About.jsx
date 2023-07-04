import React from 'react'
import arprofile from '../assets/arprofile.png'

const About = () => {
  return (
    <div id="about" className="bg-about-2 bg-slate-900 bg-cover bg-center flex md:flex-row flex-col justify-center items-center text-slate-100 min-h-screen">
      <div className='md:w-7/12 grow-0 p-5 md:p-0 flex flex-col text-center md:text-left'>
        Hi I'm James. I was born on the 9th of August, 1999.<br></br>I'm graduated Information Technology major from King Mongkut's Institute of Technology Ladkrabang.<br></br>
        I'm Web Developer, I prefer to design and develop the website or mobile-app almost frontend.<br></br>I am extremely motivated to constantly develop my skills and grow professionally.

      </div>
      <div className='md:w-6/12 grow-0 mx-auto flex flex-col items-center md:text-xl text-lg'>
        <h1 className='text-white font-semibold'>
          ABOUT ME        
        </h1>     
        <div className='w-3/12'>
          <img src={arprofile} alt="profileabout"/>
        </div>
      </div>
    </div>
  )
}

export default About
