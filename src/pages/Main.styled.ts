import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1000;
  background-color: ${({ theme }) => theme.colors.background};
`
