import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='min-h-full md:mx-20 border-4 rounded-lg flex flex-wrap md:flex-nowrap flex-col md:flex-row mx-5 my-8 text-slate-100'>
      {children}
    </div>
  )
}

export default Layout
