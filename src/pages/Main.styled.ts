import styled from 'styled-components/macro'
import ChangeTheme from '../res/icons/icons/ChangeTheme'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  background-repeat: repeat;
  z-index: -1000; ;
`

export const Content = styled.div`
  box-sizing: border-box;
  border: solid ${({ theme }) => theme.colors.text} 10px;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) =>
    `background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:cc='http://creativecommons.org/ns%23' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='120px' height='120px' viewBox='0 0 24 24' %3E%3Cg transform='translate(0 -1028.4)'%3E%3Cpath fill='%23${theme.colors.backgroundDark.replace(
      '#',
      '',
    )}' d='M0,1028.4v6h6l-6,6v6l12-12v-6H0z M12,1034.4h6l6-6h-6L12,1034.4z M0,1046.4v6h12l6-6h-6v-6l-6,6H0z M24,1046.4l-6,6h6 V1046.4z'/%3E%3C/g%3E%3C/svg%3E%0A")`};
  background-repeat: repeat;
  margin: 50px 100px;
  overflow-y: scroll;
  height: calc(100% - 100px);

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const ChangeThemeButton = styled(ChangeTheme)`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 24px;
  top: 20px;
  fill: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
  :active {
    opacity: 1;
  }
`
