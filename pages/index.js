import React from 'react'
import HeaderFS from '../components/sections/HeaderFS'
import Cartoons from '../components/sections/Cartoons'
import AboutMe from '../components/sections/AboutMe'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

const Page = () => {
  return (
    <>
      <section id="home">
        <HeaderFS />
        <Cartoons />
      </section>

      <section id="about" style={{ paddingTop: 200 }}>
        <AboutMe />
      </section>

      <section id="skills" style={{ paddingTop: 150 }}>
        <Skills />
      </section>

      <section id="projects" style={{ paddingTop: 150 }}>
        <Projects />
      </section>

      <section id="contact" style={{ paddingTop: 150, paddingBottom: 180 }}>
        <Contact />
      </section>
    </>
  )
}

export default Page
