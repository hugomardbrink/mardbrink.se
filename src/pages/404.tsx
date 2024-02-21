import { Title, Text, ReturnButton, Wrapper } from './404.styled'

export const Error404 = () => {
  return (
    <Wrapper>
      <Title>ERROR 404</Title>
      <Text>Page missing...</Text>
      <ReturnButton href="/">GO BACK</ReturnButton>
    </Wrapper>
  )
}
