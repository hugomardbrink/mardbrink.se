import { Header } from '../features/header/Header'
import { Intro } from '../features/intro/Intro'
import { useTheme } from '../themes/ThemeProvider'
import { ChangeThemeButton, Content, Wrapper } from './Main.styled'

export const Main = () => {
  const { changeTheme } = useTheme()
  return (
    <Wrapper>
      <ChangeThemeButton onClick={changeTheme} />
      <Content>
        <Header />
        <Intro />
      </Content>
    </Wrapper>
  )
}
