import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   

    font-family: 'Archivo', sans-serif;
    
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary}; 
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors.accent};
    background: unset;
  }
    
  ::selection {
    color: ${({ theme }) => theme.colors.accent};
    background: unset;
  }
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
