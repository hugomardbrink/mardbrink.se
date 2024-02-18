import { Header } from '../features/Header'
import { About } from '../features/About'
import { Grain, Wrapper } from './Main.styled'
import GrainImage from '../../res/grain.png'

export const Main = () => {
  return (
    <Wrapper>
      <Grain src={GrainImage} />
      <Header />
      <About />
    </Wrapper>
  )
}
