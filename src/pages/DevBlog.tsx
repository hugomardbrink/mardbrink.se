import { Title, HomeLink, PostWrapper, PostModule, PostTitle, PostDate, PostHeader, ModulePrimaryButton, Wrapper } from './DevBlog.styled'
import testPost from '../../res/posts/Test.md?raw'
import examplePost from '../../res/posts/Example.md?raw'

export const DevBlog = () => {
  interface Post {
    name: string
    date: Date
    text: string
  }

  const Posts: Post[] = [
    { name: 'TEST POST', date: new Date(2024, 2, 20, 13, 20), text: testPost },
    { name: 'EXAMPLE BLOG POST', date: new Date(2024, 2, 22, 14, 29), text: examplePost },
    { name: 'EXAMPLE BLOG POST', date: new Date(2024, 2, 22, 14, 29), text: examplePost },
    { name: 'EXAMPLE BLOG POST', date: new Date(2024, 2, 22, 14, 29), text: examplePost },
  ]

  return (
    <Wrapper>
      <HomeLink href="/">&lt; HOME</HomeLink>
      <Title>DEV BLOG</Title>
      <PostWrapper>
        {Posts.map((p) => (
          <PostModule>
            <PostHeader>
              <PostTitle>{p.name}</PostTitle>
              <PostDate>
                {p.date.getFullYear()}-{p.date.getMonth()}-{p.date.getDate()} @{p.date.getHours()}:
                {p.date.getMinutes()}
              </PostDate>
            </PostHeader>
            <ModulePrimaryButton>READ POST</ModulePrimaryButton>
          </PostModule>
        ))}
      </PostWrapper>
    </Wrapper>
  )
}
