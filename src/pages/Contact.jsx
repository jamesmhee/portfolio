import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {RxGithubLogo} from 'react-icons/rx'
import { MdEmail } from "react-icons/md";
import { AiOutlineCheckCircle, AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Contact = () => {
  const form = useRef()
  const [sending, setSending] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_63crr5h",
        "template_7u654u7",
        form.current,
        "qx5OvTLbY-R-RLEpJ"
      )
      .then(
        (result) => {
          console.log(result.text + "sending");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  

  const handleSubmit = () =>{
    const subject = document.forms["Form"]["sender-subject"].value // pull value from form field
    const name = document.forms["Form"]["sender-name"].value // pull value from form field
    const email = document.forms["Form"]["sender-email"].value// pull value from form field
    const message = document.forms["Form"]["sender-message"].value
    if(
      subject != '' &&
      name != '' &&
      email != '' &&
      message != '')
    {
      setSending(true)
    } else {
      setSending(false)
    }
  }


  return (
    <>
      <footer id="contact" className='h-fit flex items-end justify-center bg-footer bg-top md:bg-bottom bg-cover'>        
        <div className='flex flex-col gap-10 my-20 items-center text-slate-900 '>
          <div className='flex'>
            <div className='w-90 sm:w-[500px] lg:w-[1000px] md:w-[700px] text-center md:max-w-[1000px] p-5 md:p-10 h-auto bg-white drop-shadow-lg rounded-[50px]'>
            <h1 className='text-[2rem] text-rose-600 uppercase text-center md:text-right font-semibold text-shadow-lg p-5'>Contact me</h1>
            <form id='form' name="Form" className='flex flex-col p-5 space-y-6' ref={form} onSubmit={sendEmail}>
              <input className='bg-white focus:transition-all rounded text-rose-600 p-2 border-2 rounded-[30px] drop-shadow-md caret-rose-600' required placeholder='Your Name *' type="text" name="sender-name" />
              <input className='bg-white focus:transition-all rounded text-rose-600 p-2 border-2 rounded-[30px] drop-shadow-md caret-rose-600' required placeholder='Your Email *' type="email" name="sender-email" />
              <input className='bg-white focus:transition-all rounded text-rose-600 p-2 border-2 rounded-[30px] drop-shadow-md caret-rose-600' required placeholder='Your Subject *' type="text" name="sender-subject" />
              <textarea className='resize-none bg-white focus:transition-all rounded text-rose-600 p-2 border-2 rounded-[30px] drop-shadow-md caret-rose-600 ' required placeholder='What do you want to tell me *' rows={10} name="sender-message" />
              <button id='button' onClick={handleSubmit} className='rounded-[20px] h-20 w-60 mx-auto drop-shadow-md mt-10 text-white bg-rose-600 text-[1.8rem] hover:text-slate-100 hover:bg-black transition-all duration-300' type="submit">
                {(sending) ? 
                (<p className='text-current transition-all duration-500 text-center underline inline-flex text-[1.6rem] '>SENDING&nbsp;<AiOutlineCheckCircle size={40}/> </p>)
                : (<p>SEND</p>)
                }
              </button>
            </form>
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
                <MdEmail className='inline-flex' size={20}/> : nontasabs@gmail.com 
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
