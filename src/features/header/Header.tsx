import GithubLogo from '../../res/icons/GithubLogo'
import LinkedInLogo from '../../res/icons/LinkedInLogo'
import { GITHUB_URL, LINKEDIN_URL } from './constants'
import { EscapeHatch, Link, SocialsContainer, Wrapper } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <EscapeHatch>Hugo Mårdbrink</EscapeHatch>
      <SocialsContainer>
        <Link href={GITHUB_URL}>
          <GithubLogo />
        </Link>
        <Link href={LINKEDIN_URL}>
          <LinkedInLogo />
        </Link>
      </SocialsContainer>
    </Wrapper>
  )
}
