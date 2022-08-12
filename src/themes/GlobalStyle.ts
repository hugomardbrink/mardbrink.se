import { createGlobalStyle } from 'styled-components/macro'
import '@fontsource/aileron'
export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: Ailerons;
    src: url(./fonts/Ailerons.woff2) format(woff2)
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: Aileron;
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
