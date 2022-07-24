import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: -1000;
`

export const Content = styled.div`
  box-sizing: border-box;
  border: solid ${({ theme }) => theme.colors.text} 10px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 50px 100px;
  overflow-y: scroll;
  height: calc(100% - 100px);

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
