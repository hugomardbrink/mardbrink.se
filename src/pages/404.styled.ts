import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`

export const Title = styled.span`
  margin-top: 120px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
`

export const Text = styled.span`
  margin-top: 20px;
  font-size: 46px;
  font-weight: 500;
`

export const ReturnButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 300px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  transition: box-shadow 0.25s, margin 0.25s;

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accent};
  margin-top: 200px;
  margin-right: 0px;

  &:hover {
    margin-top: 191px;
    margin-left: -9px;
    box-shadow: 9px 9px 0 1px ${({ theme }) => theme.colors.accent};
  }

  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`
