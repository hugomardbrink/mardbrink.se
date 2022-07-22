import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.sky};
  z-index: -1000;
`
