import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 50px;
  line-height: 0.9;
`

export const Title = styled.span`
  position: relative;
  margin-top: 35px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
`

export const HomeLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 32px;
  font-family: 'Archivo Black', sans-serif;
  cursor: pointer;
  width: 140px;

  &:hover {
    text-decoration: underline;
  }
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 44px;
`

export const PostModule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 525px;
  height: 225px;
  border: 5px ${({ theme }) => theme.colors.secondary} solid;
  box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.secondary};
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostTitle = styled.span`
  margin-top: 30px;
  margin-left: 35px;

  font-size: 36px;
  font-weight: 600;
`

export const PostDate = styled.span`
  margin-top: 7px;
  margin-left: 37px;

  font-size: 20px;
  font-weight: 500;
`

export const ModulePrimaryButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  width: 200px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  border: none;
  cursor: pointer;

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accent};
  margin-bottom: 25px;
  margin-left: 35px;

  &:hover {
    margin-bottom: 34px;
    margin-left: 26px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.accent};
  }
`
