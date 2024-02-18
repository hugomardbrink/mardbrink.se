import { Divider, Module, ModuleGroup, ModuleTitle, ModuleText, Title, Wrapper } from './About.styled'

export const About = () => {
  return (
    <Wrapper>
      <Title>WHO AM I?</Title>
      <Divider />
      <ModuleGroup>
        <Module>
          <ModuleTitle>STUDENT</ModuleTitle>
          <ModuleText>M.Sc. student <br/> within high performance computer systems</ModuleText>
        </Module>
        <Module>
          <ModuleTitle>ENGINEER</ModuleTitle>
          <ModuleText>Several years of experience at Opera Software, Volvo AB <br/> & Volvo Cars</ModuleText>
        </Module>
        <Module>
          <ModuleTitle>HOBBYIST</ModuleTitle>
          <ModuleText>I have a wide range <br/> of hobbies ranging from sailing to electronics</ModuleText>
        </Module>
      </ModuleGroup>
    </Wrapper>
  )
}
