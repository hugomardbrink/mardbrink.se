import GithubLogo from '../../res/icons/GithubLogo'
import LinkedInLogo from '../../res/icons/LinkedInLogo'
import { GITHUB_URL, LINKEDIN_URL } from './constants'
import { EscapeHatch, Wrapper, Content, NavLink, RightContainer } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <EscapeHatch>Hugo Mårdbrink</EscapeHatch>
        <RightContainer>
          <NavLink>Resume</NavLink>
          <NavLink>Contact</NavLink>
        </RightContainer>
      </Content>
    </Wrapper>
  )
}
