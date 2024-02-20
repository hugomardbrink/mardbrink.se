import { Detail, Divider, EmailIcon, GithubIcon, Title, Module, ModuleGroup, Wrapper } from './MoreMe.styled'

export const MoreMe = () => {
  const GithubLink = 'https://github.com/hugomardbrink'

  const DraftEmail = (event: any) => {
    event.preventDefault()
    const to = 'hugo@mardbrink.se'
    const mailtoUri = `mailto:${encodeURIComponent(to)}?subject=&body=`
    window.location.href = mailtoUri
  }

  return (
    <Wrapper>
      <Title>MORE OF ME</Title>
      <Divider />
      <ModuleGroup>
        <Module href={GithubLink}>
          <GithubIcon />
          <Detail>@hugomardbrink</Detail>
        </Module>
        <Module href="/" onClick={DraftEmail}>
          <EmailIcon />
          <Detail>hugo@mardbrink.se</Detail>
        </Module>
      </ModuleGroup>
    </Wrapper>
  )
}
