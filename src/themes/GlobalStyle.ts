import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   

    color: ${({ theme }) => theme.colors.text};
  }
`
