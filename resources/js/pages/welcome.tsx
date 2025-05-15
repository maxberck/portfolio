import Header from '@/components/portfolio/Header'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import React from 'react'


function welcome({profils, skills, experiences}) {
  return (
    <>
      <Header profils={profils}></Header>
      <div className="flex">
        <div className="w-1/2">
          <Skills skills={skills} />
        </div>
        <div className="w-1/2">
          <Experience experiences={experiences} />
        </div>
      </div>

    </>
  )
}

export default welcome