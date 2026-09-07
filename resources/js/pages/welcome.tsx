import Header from '@/components/portfolio/Header'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Project from '@/components/portfolio/Project'
import github from '../../../storage/app/public/footer/github.svg'
import linkedin from '../../../storage/app/public/footer/linkedin.svg'
import React from 'react'


function welcome({profils, skills, experiences, projects}) {
  return (
    <>
      <Header profils={profils}></Header>
      <section className="flex">
        <div className="w-1/2" id='competences'>
          <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mes Competences</h1>
          <Skills skills={skills} />
        </div>
        <div className="w-1/2" id='parcours'>
          <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mon parcours</h1>
          <Experience experiences={experiences} />
        </div>
      </section>
      <section className='pt-40' id='projet'>
        <h1 className='text-[#FCFCFC] text-center py-10 text-5xl'>Mes Projets</h1>
        <Project projects={projects}></Project>
      </section>
      <footer className='flex justify-center pt-20 flex-col items-center'>
        <div className="bg-white py-2 flex justify-center gap-6 w-25 rounded-xl">
          <a href="https://github.com/maxberck" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/maxence-berckmans/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
        <div className='pt-10'>
          <p className='text-[#FCFCFC] text-md'>© 2025 Maxence Berckmans</p>
        </div>
      </footer>

    </>
  )
}

export default welcome