import React from 'react'
import Navbar from '../navbar'
import Contact from '../contact'
import Blog from './blog'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default page
