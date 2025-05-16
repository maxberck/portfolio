import Header from '@/components/portfolio/Header'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Project from '@/components/portfolio/Project'
import React from 'react'


function welcome({profils, skills, experiences, projects}) {
  return (
    <>
      <Header profils={profils}></Header>
      <section className="flex">
        <div className="w-1/2">
          <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mes Competences</h1>
          <Skills skills={skills} />
        </div>
        <div className="w-1/2">
          <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mon parcours</h1>
          <Experience experiences={experiences} />
        </div>
      </section>
      <section className='pt-40'>
        <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mes Projets</h1>
        <Project projects={projects}></Project>
      </section>
    </>
  )
}

export default welcome