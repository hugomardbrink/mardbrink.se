import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
`
