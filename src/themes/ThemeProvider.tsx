import { createContext, FC, ReactNode, useMemo, useState } from 'react'
import { ThemeProvider as ThemesProvider } from 'styled-components'
import dark from './variations/dark.json'
import { GlobalStyle } from './GlobalStyle'
import light from './variations/light.json'

const themes = { light, dark }
export const defaultTheme = themes.light

export type ThemeType = typeof defaultTheme

export const ThemeContext = createContext({
  theme: defaultTheme,
})

export interface ThemeProviderProps {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  const value = useMemo(() => ({ theme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      <ThemesProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemesProvider>
    </ThemeContext.Provider>
  )
}
