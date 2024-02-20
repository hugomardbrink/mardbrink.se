import { createGlobalStyle } from 'styled-components'

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
