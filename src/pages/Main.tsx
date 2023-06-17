import { Body } from '../features/Body'
import { Header } from '../features/Header'
import { Layout, StartColor, Wrapper } from './Main.styled'

export const Main = () => {
  return (
    <Wrapper>
      <StartColor />
      <Layout>
        <Header />
        <Body />
      </Layout>
    </Wrapper>
  )
}
