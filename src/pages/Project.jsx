import React from 'react'
import Slider from '../components/Slider'
import Skills from '../components/Skills'

const Project = () => {
  return (
  <>
    <div  id="project"  className='bg-skills bg-cover md:bg-bottom bg-left-bottom bg-no-repeat flex md:flex-row flex-col my-10 md:p-20 p-10 mx-auto justify-center gap-10 items-center h-full w-full'>
      <div className='font-semibold text-lg md:text-white text-rose-600 text-center uppercase underline decoration-wavy decoration-zinc-900 underline-offset-8 w-auto md:w-4/12'>
        my project
      </div>
      <div className='rounded-xl bg-zinc-900 opacity-90 w-full flex items-center justify-center h-96'>
        <Slider />
      </div>
    </div>
    <div className='flex justify-center h-full w-full mx-auto'>
      <Skills />
    </div>
  </>
  )
}

export default Project
