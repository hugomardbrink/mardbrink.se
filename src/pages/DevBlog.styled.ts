import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
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
