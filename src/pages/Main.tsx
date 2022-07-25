import { Header } from '../features/header/Header'
import { Intro } from '../features/intro/Intro'
import { Content, Wrapper } from './Main.styled'

export const Main = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <Intro />
      </Content>
    </Wrapper>
  )
}
