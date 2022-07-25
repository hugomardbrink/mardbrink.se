import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 100px 32px;
`

export const IntroText = styled.div`
  font-size: 64px;
  font-weight: 800;
  padding-left: 16px;
  margin-left: 4px;
  border-left: solid ${({ theme }) => theme.colors.text} 10px;
  width: 50%;
`

export const AboutContainer = styled.div`
  justify-self: right;
  align-self: flex-end;
  margin-top: 130px;
  text-align: right;
  width: 43%;
`

export const AboutHeader = styled.div`
  font-size: 28px;
  font-weight: 600;
`

export const AboutText = styled.div`
  font-size: 20px;
  margin-top: 6px;
`
