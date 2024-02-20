import { Title, HomeLink, PostModule, PostTitle, PostDate, ModulePrimaryButton, Wrapper } from './DevBlog.styled'
import testPost from '../../res/posts/Test.md?raw'

export const DevBlog = () => {
  interface Post {
    name: string
    date: Date
    text: string
  }

  const Posts: Post[] = [{ name: 'TEST POST', date: new Date(2024, 1, 20, 13, 20), text: testPost }]

  return (
    <Wrapper>
      <HomeLink href="/">&lt; HOME</HomeLink>
      <Title>DEV BLOG</Title>
      {Posts.map((p) => (
        <PostModule>
          <PostTitle>{p.name}</PostTitle>
          <PostDate>
            {p.date.getFullYear()}-{p.date.getMonth()}-{p.date.getDay()} @{p.date.getHours()}:
            {p.date.getMinutes()}
          </PostDate>
          <ModulePrimaryButton>READ POST</ModulePrimaryButton>
        </PostModule>
      ))}
    </Wrapper>
  )
}
