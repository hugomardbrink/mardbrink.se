import { createGlobalStyle } from 'styled-components/macro'
import '@fontsource/roboto'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   

    color: ${({ theme }) => theme.colors.text};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors.ocean.deep};
    background: unset;
  }
    
  ::selection {
    color: ${({ theme }) => theme.colors.ocean.deep};
    background: unset;
  }



`
