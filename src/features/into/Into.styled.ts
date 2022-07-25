import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  height: auto;
  margin-left: 32px;
  margin-top: 64px;
  width: 50%;
`

export const Text = styled.div`
  font-size: 64px;
  font-weight: 800;
  padding-left: 16px;
  border-left: solid ${({ theme }) => theme.colors.text} 10px;
`
