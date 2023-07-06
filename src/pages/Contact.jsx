import React from 'react'
import {RxGithubLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <footer id="contact" className='h-fit flex items-end justify-center bg-footer bg-top md:bg-bottom bg-cover'>        
        <div className='flex flex-col gap-10 my-20 items-center text-slate-900 '>
          <div className='flex'>
            <div className='w-80 md:w-full md:w-[700px] p-20 h-96 bg-white shadow-lg rounded-lg'>
              
            </div>
          </div>
          <div className='flex mb-5'>
            <div className='flex gap-10'>
              <Link to="https://github.com/jamesmhee" target='_blank'>
                <h2 className='text-[1.25rem] cursor-pointer duration-500 text-slate-100 hover:text-rose-600 mt-10'>
                  <RxGithubLogo size={40}/>
                </h2>
              </Link>
              <Link to="#" onClick={()=>{
                window.location.href ='mailto:nontasabs@gmail.com'
              }}>
                <h2 className='text-[1.25rem] cursor-pointer duration-500 text-slate-100 hover:text-rose-600 mt-10'>
                  nontasabs@gmail.com
                </h2>
              </Link>
            </div>
          </div>        
        </div>        
      </footer>      
    </>    
  )
}

export default Contact
