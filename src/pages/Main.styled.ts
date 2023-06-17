import styled from 'styled-components'

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

export const StartColor = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  z-index: -100;

  background-color: ${({ theme }) => theme.colors.selection};
`

export const Layout = styled.div`
  margin: 0 128px;
  margin-top: 64px;
`
