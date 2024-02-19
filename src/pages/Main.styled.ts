import styled from 'styled-components'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1000;
`

export const Grain = styled.img`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
`

export const Layout = styled.div`
  margin: 0 128px;
  margin-top: 64px;
`
