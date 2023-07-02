import React from 'react'
import { Link } from 'react-router-dom'
import { ImHome } from "react-icons/im";

const Navbar = () => {
  const navbar = document.getElementById('navbar')
  
  return (
    <>
    <nav id="navbar" className="m-3 md:m-0 border-zinc-200 border-2 sm:border-4 md:border-t-0 md:border-x-0 md:border-b-2 p-4 rounded-full md:rounded-none bg-transparent justify-around flex fixed inset-x-0 bottom-2 md:sticky md:top-0">
        <ul className='flex gap-10 md:gap-24 items-center text-slate-100 text-sm md:text-lg'>
          <Link to="">
            <li className='hover:text-red-500 transition-all ease-in-out'><ImHome size={30}/></li>                      
          </Link >
          <Link to="">
            <li>ABOUT</li>          
          </Link>
          <Link to="">
            <li>WORK</li>          
          </Link>
          <Link to="">
            <li>CONTACT</li>          
          </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
