import { About } from '../features/About'
import { Header } from '../features/Header'
import { Projects } from '../features/Projects'
import { MoreMe } from '../features/MoreMe'
import { Grain, Wrapper } from './Main.styled'
import GrainImage from '../../res/grain.png'

export const Main = () => {
  return (
    <Wrapper>
      <Grain src={GrainImage} />
      <Header />
      <About />
      <Projects />
      <MoreMe />
    </Wrapper>
  )
}
