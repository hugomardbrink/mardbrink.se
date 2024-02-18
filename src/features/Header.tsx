import { About, ButtonGroup, NameContainer, PrimaryButton, SecondaryButton, Wrapper } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <NameContainer>HUGO</NameContainer>
      <NameContainer>MARDBRINK</NameContainer>
      <About>Social student with a passion for<br/>software and hardware co-design.</About>
      <ButtonGroup>
        <PrimaryButton>PROJECTS</PrimaryButton>
        <SecondaryButton>BLOG</SecondaryButton>
      </ButtonGroup>
    </Wrapper>
  )
}
