import {
  About,
  ButtonGroup,
  NameContainer,
  PrimaryButton,
  SecondaryButton,
  Wave,
  Wrapper,
} from './Header.styled'
import WaveImage from '../../res/graphics/wave.png'

export const Header = () => {
  return (
    <Wrapper>
      <Wave src={WaveImage} />
      <NameContainer>HUGO</NameContainer>
      <NameContainer>MARDBRINK</NameContainer>
      <About>
        Social student with a passion for
        <br />
        software and hardware co-design.
      </About>
      <ButtonGroup>
        <PrimaryButton href="#projects">PROJECTS</PrimaryButton>
        <SecondaryButton to="/blog">BLOG</SecondaryButton>
      </ButtonGroup>
    </Wrapper>
  )
}
