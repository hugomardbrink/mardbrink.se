import GithubLogo from '../../res/icons/GithubLogo'
import LinkedInLogo from '../../res/icons/LinkedInLogo'
import { GITHUB_URL, LINKEDIN_URL } from './constants'
import { EscapeHatch, OceanBoat, Wrapper, Content, NavLink, RightContainer } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <OceanBoat />
      <Content>
        <EscapeHatch>
          <div>Hugo</div>
          <div>Mårdbrink</div>
        </EscapeHatch>
        <RightContainer>
          <NavLink>Resume</NavLink>
          <NavLink>Contact</NavLink>
        </RightContainer>
      </Content>
    </Wrapper>
  )
}
