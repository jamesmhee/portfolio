import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll/modules'
// import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { ImHome } from "react-icons/im";

const Navbar = () => {
  const [ scrollDown, setScrollDown ] = useState(false);
  const nav = document.querySelector('#navbar');
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrollDown(true);
      }else {
        setScrollDown(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },)

  return (
  <>
    <nav id="navbar" className={`z-20 transition-all inset-x-0 duration-700 ease-in-out m-5 p-5 ${scrollDown ? 'md:p-8 drop-shadow-md md:bg-zinc-900' : 'md:p-12 md:border-hidden md:bg-[#212121] '} md:m-0 bg-zinc-900 rounded-full md:rounded-none justify-center fixed md:justify-around flex bottom-3 md:sticky md:top-0`}>
        <Link to="" duration={400} smooth={true} onClick={scrollToTop}>
          <div className={`${scrollDown? 'md:text-lg' : 'md:text-xl'} transition-all duration-700 ease-in-out hidden md:block font-semibold text-rose-600 hover:text-white transition-all ease-in-out duration-300`}>
            <p className='cursor-pointer transition duration-300 hover:scale-125'>jemmyblair</p>
          </div>        
        </Link>
        <ul className={`${scrollDown? 'md:text-[1.1rem]' : 'md:text-[1.1rem]'} transition-all duration-500 ease-in-out flex gap-10 md:gap-24 font-semibold items-center text-[0.8rem] sm:text-[0.83rem]`}>
          <Link to="" duration={400} smooth={true} onClick={scrollToTop}>
            <li className='cursor-pointer md:hidden text-rose-600 hover:text-white transition-all ease-in-out'><ImHome size={30}/></li>                      
          </Link >
          <Link to="about" duration={400} smooth={true}>
            <li className='cursor-pointer text-white hover:text-rose-600 transition-all ease-in-out hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-8'>ABOUT</li>          
          </Link>
          <Link to="project" duration={400} smooth={true}>
            <li className='text-center cursor-pointer text-white hover:text-rose-600 transition-all ease-in-out hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-8'>PROJECT & SKILLS</li>          
          </Link>
          {/* <Link to="skills" duration={400} smooth={true}>
            <li className='cursor-pointer text-white hover:text-rose-600 transition-all ease-in-out hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-8'>SKILLS</li>          
          </Link> */}
          <Link to="contact" duration={400} smooth={true}>
            <li className='cursor-pointer text-white hover:text-rose-600 transition-all ease-in-out hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-8'>CONTACT</li>          
          </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
