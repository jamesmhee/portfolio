import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='min-h-full min-w-full flex flex-col flex-wrap justify-center md:justify-around md:flex-col md:flex-nowrap text-slate-100'>
      {children}
    </div>
  )
}

export default Layout
