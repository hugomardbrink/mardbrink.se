import { Header } from '../features/Header'
import { Grain, Wrapper } from './Main.styled'
import GrainImage from '../../res/grain.png'

export const Main = () => {
  return (
    <Wrapper>
      <Grain src={GrainImage} />
      <Header />
    </Wrapper>
  )
}
