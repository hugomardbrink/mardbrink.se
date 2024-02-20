import { Title, HomeLink, PostWrapper, PostModule, PostTitle, PostDate, PostHeader, ModulePrimaryButton, Wrapper } from './DevBlog.styled'

export const DevBlog = () => {
  interface Post {
    name: string
    date: Date
    text: string
  }

  const Posts: Post[] = []

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
