import React from 'react'
import Slider from '../components/Slider'

const Project = () => {
  return (
    <div  id="project"  className='flex md:flex-row flex-col my-10 md:p-20 p-10 justify-center gap-10 items-center h-full'>
      <div  className='font-semibold text-lg text-rose-600 text-center uppercase underline decoration-wavy decoration-zinc-900 underline-offset-8 w-auto md:w-4/12'>
        my project
      </div>
      <div  id="project" className='rounded-xl bg-zinc-900 w-full flex items-center justify-center h-96'>
        <Slider />
      </div>
    </div>
  )
}

export default Project
