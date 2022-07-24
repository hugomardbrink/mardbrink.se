import { Header } from '../features/header/Header'
import { Content, Wrapper } from './Main.styled'

export const Main = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
      </Content>
    </Wrapper>
  )
}
