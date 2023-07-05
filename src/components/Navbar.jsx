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
    <nav id="navbar" className={`z-50 transition-all duration-700 ease-in-out m-3 p-5 ${scrollDown ? 'md:p-8 md:shadow-zero md:bg-zinc-900' : 'md:p-12 md:border-hidden md:bg-[#212121] '} md:m-0 bg-zinc-900 border-none border-2 sm:border-4 md:border-t-0 md:border-b-4 md:border-x-0 md:border-b-2 p-4 rounded-full md:rounded-none bg-transparent justify-center md:justify-around flex fixed inset-x-0 bottom-2 md:sticky md:top-0`}>
        <Link to="" duration={400} smooth={true} onClick={scrollToTop}>
          <div className={`${scrollDown? 'md:text-lg' : 'md:text-xl'} transition-all duration-700 ease-in-out hidden md:block font-semibold text-slate-100 hover:text-rose-600 transition-all ease-in-out duration-300`}>
            <p className='cursor-pointer'>jemmyblair</p>
          </div>        
        </Link>
        <ul className={`${scrollDown? 'md:text-md' : 'md:text-md'} transition-all duration-700 ease-in-out flex gap-10 md:gap-24 font-semibold items-center text-sm sm:text-md`}>
          <Link to="" duration={400} smooth={true} onClick={scrollToTop}>
            <li className='cursor-pointer md:hidden text-rose-600 hover:text-white transition-all ease-in-out'><ImHome size={30}/></li>                      
          </Link >
          <Link to="about" duration={400} smooth={true}>
            <li className='cursor-pointer text-rose-600 hover:text-white transition-all ease-in-out'>ABOUT</li>          
          </Link>
          <Link to="project" duration={400} smooth={true}>
            <li className='cursor-pointer text-rose-600 hover:text-white transition-all ease-in-out'>PROJECT</li>          
          </Link>
          <Link to="contact" duration={400} smooth={true}>
            <li className='cursor-pointer text-rose-600 hover:text-white transition-all ease-in-out'>CONTACT</li>          
          </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
