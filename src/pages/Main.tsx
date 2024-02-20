import { About } from '../features/About'
import { Header } from '../features/Header'
import { Projects } from '../features/Projects'
import { MoreMe } from '../features/MoreMe'
import { Wrapper } from './Main.styled'

export const Main = () => {
  return (
    <Wrapper>
      <Header />
      <About />
      <Projects />
      <MoreMe />
    </Wrapper>
  )
}
