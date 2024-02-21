import { useRef, useState } from 'react'

import { About } from '../features/About'
import { Header } from '../features/Header'
import { Projects } from '../features/Projects'
import { MoreMe } from '../features/MoreMe'
import { Wrapper } from './Main.styled'

export const Main = () => {
  const [projects] = useState<any>(useRef())

  const scrollToProjects = () => {
    if (projects.current) {
      window.scrollTo({
        top: projects.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Wrapper>
      <Header scrollToProjects={scrollToProjects} />
      <About />
      <Projects scrollToProjects={projects} />
      <MoreMe />
    </Wrapper>
  )
}
