import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   

    font-family: 'Fira Sans', sans-serif;

    color: ${({ theme }) => theme.colors.text};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors.selection};
    background: unset;
  }
    
  ::selection {
    color: ${({ theme }) => theme.colors.selection};
    background: unset;
  }
`
