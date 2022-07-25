import { GITHUB_URL, LINKEDIN_URL } from './constants'
import { Name, Wrapper, Content, NavLink, RightContainer } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Name>Hugo Mårdbrink</Name>
        <RightContainer>
          <NavLink>Resume</NavLink>
          <NavLink>Contact</NavLink>
        </RightContainer>
      </Content>
    </Wrapper>
  )
}
