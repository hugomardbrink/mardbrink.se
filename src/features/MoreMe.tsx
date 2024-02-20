import { Detail, Divider, EmailIcon, GithubIcon, Title, Module, ModuleGroup, Wrapper } from './MoreMe.styled'

export const MoreMe = () => {
  return (
    <Wrapper>
      <Title>MORE OF ME</Title>
      <Divider />
      <ModuleGroup>
        <Module>
          <GithubIcon />
          <Detail>@hugomardbrink</Detail>
        </Module>
        <Module>
          <EmailIcon />
          <Detail>hugo@mardbrink.se</Detail>
        </Module>
      </ModuleGroup>
    </Wrapper>
  )
}
