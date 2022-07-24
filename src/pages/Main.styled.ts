import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:cc='http://creativecommons.org/ns%23' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='148px' height='148px' viewBox='0 0 24 24' %3E%3Cg transform='translate(0 -1028.4)'%3E%3Cpath fill='%23DDC5A1' d='M0,1028.4v6h6l-6,6v6l12-12v-6H0z M12,1034.4h6l6-6h-6L12,1034.4z M0,1046.4v6h12l6-6h-6v-6l-6,6H0z M24,1046.4l-6,6h6 V1046.4z'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: repeat;
  z-index: -1000;
`

export const Content = styled.div`
  box-sizing: border-box;
  border: solid ${({ theme }) => theme.colors.text} 10px;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:cc='http://creativecommons.org/ns%23' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='124px' height='124px' viewBox='0 0 24 24' %3E%3Cg transform='translate(0 -1028.4)'%3E%3Cpath fill='%23DAC29E' d='M0,1028.4v6h6l-6,6v6l12-12v-6H0z M12,1034.4h6l6-6h-6L12,1034.4z M0,1046.4v6h12l6-6h-6v-6l-6,6H0z M24,1046.4l-6,6h6 V1046.4z'/%3E%3C/g%3E%3C/svg%3E%0A");
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
