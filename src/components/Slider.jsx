import React from 'react'

const Slider = () => {
  return (
    <div className="flex justify-center flex-wrap p-5 gap-5 items-center">
        <div className='italic'>MY WORKS</div>
        <div className='italic'>MY WORKS</div>
        <a href="https://github.com/jamesmhee" target='_blank'><div className='uppercase text-lg border-4 border-rose-500 hover:border-white text-center p-5 ease-in hover:scale-125 duration-500 hover:font-bold hover:text-rose-500 '>View my Github</div></a>
        <div className='italic'>MY WORKS</div>
        <div className='italic'>MY WORKS</div>
    </div>
  )
}

export default Slider
