import React from 'react'
import BlogPost from './blog'
import Navbar from '@/app/navbar'
import Contact from '@/app/contact'

const page = () => {
  return (
    <div>
        <Navbar/>
        <BlogPost/>
        <Contact/>
    </div>
  )
}

export default page
