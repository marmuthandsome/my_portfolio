import React from 'react'
import Navbar from './navbar'
import Banner from './banner'
import SecuritySkills from './skill'
import Certifications from './cert'
import Projects from './project'
import Experience from './experience'
import Contact from './contact'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Experience/>
        <SecuritySkills/>
        <Projects/>
        <Certifications/>
        <Contact/>
    </div>
  )
}

export default page
