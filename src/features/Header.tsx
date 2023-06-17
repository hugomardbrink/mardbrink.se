import { Link, LinkTree, NameContainer, FirstRow, SecondRow, Wrapper } from './Header.styled'

const GITHUB_LINK = 'https://github.com/hugomardbrink'
const LINKEDIN_LINK = 'https://linkedin.com/in/hugomardbrink/'

export const Header = () => {
  return (
    <Wrapper>
      <FirstRow>
        <NameContainer>Hugo Mårdbrink</NameContainer>
        <LinkTree>
          <Link href={GITHUB_LINK}>{'> Github'}</Link>
          <Link href={LINKEDIN_LINK}>{'> LinkedIn'}</Link>
        </LinkTree>
      </FirstRow>
      <SecondRow></SecondRow>
    </Wrapper>
  )
}
