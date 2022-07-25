import { AboutContainer, AboutHeader, AboutText, IntroText, Wrapper } from './Intro.styled'

export const Intro = () => {
  return (
    <Wrapper>
      <IntroText>Computer science student with a passion for learning.</IntroText>
      <AboutContainer>
        <AboutHeader>About me!</AboutHeader>
        <AboutText>
          Hello! I'm a 21-year-old full time student, based in Gothenburg. I have a great interest
          in exploring and experimenting with technologies, usually through hobby projects. Besides
          studying full time I've also worked at Opera and Volvo.
        </AboutText>
      </AboutContainer>
    </Wrapper>
  )
}
