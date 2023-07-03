import React from 'react'
import Profile from '../assets/profile.jpg'

const Home = () => {
  return (
      <>
        <div className="p-20 text-center">
          <img width="100%" src={Profile} alt="profile"></img>
        </div>
        <div className='p-20 mx-auto uppercase my-auto'>
            Nontasab Siangchin
        </div>
      </>
      
  )
}

export default Home
