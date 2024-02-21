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

interface ProjectsProps {
  scrollToProjects: () => void
}

export const Header = (props: ProjectsProps) => {
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
        <PrimaryButton onClick={props.scrollToProjects}>PROJECTS</PrimaryButton>
        <SecondaryButton to="/blog">BLOG</SecondaryButton>
      </ButtonGroup>
    </Wrapper>
  )
}
