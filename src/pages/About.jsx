import React from 'react'
import arprofile from '../assets/arprofile.png'

const About = () => {
  return (
    <>
    <div id="about" className="bg-about-2 bg-cover md:bg-cover md:bg-center bg-right flex md:flex-row flex-col justify-center items-center text-slate-100 min-h-screen">
      <div className='md:order-1 order-2 md:w-7/12 grow-0 p-10 flex flex-col text-center md:text-right'>
        Hi I'm James. I was born on the 9th of August, 1999.<br></br>I'm graduated Information Technology major from King Mongkut's Institute of Technology Ladkrabang.<br></br>
        I'm Web Developer, I prefer to design and develop the website or mobile-app almost frontend.<br></br>I am extremely motivated to constantly develop my skills and grow professionally.

      </div>
      <div className='md:order-2 order-1 md:w-6/12 grow-0 mx-auto flex flex-col items-center md:text-xl text-lg'>
        <h1 className='text-white font-semibold'>
          ABOUT ME        
        </h1>     
        <div className='w-3/12'>
          <img src={arprofile} alt="profileabout"/>
        </div>
      </div>
    </div>
    <div className='flex flex-col md:flex-row font-semibold -mt-36 md:-mt-16 gap-10 justify-center items-center'>
      <div className='border rounded rounded-lg bg-gray-300 w-96 h-auto p-3'>
        <p className='text-lg text-slate-900 uppercase'>
          - High School
        </p>
        <p className='text-slate-900 '>
          Wat Nuannoradit School
        </p>
      </div>
      <div className='border rounded rounded-lg bg-gray-300 w-96 h-auto p-3'>
        <p className='text-lg text-slate-900 uppercase'>
          - university
        </p>
        <p className='text-slate-900 '>
          King Mongkut's Institute of Technology Ladkrabang
        </p>
      </div>
    </div>
    </>
  )
}

export default About
