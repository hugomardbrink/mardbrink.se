import { createGlobalStyle } from 'styled-components/macro'
import '@fontsource/merriweather-sans'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Merriweather Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   

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
