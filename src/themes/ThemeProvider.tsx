import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'
import { ThemeProvider as ThemesProvider } from 'styled-components'
import dark from './variations/dark.json'
import { GlobalStyle, Grain } from './GlobalStyle'
import GrainImage from '../../res/grain.png'
import light from './variations/light.json'

const themes = { light, dark }
export const defaultTheme = themes.light

export type ThemeType = typeof defaultTheme

export const ThemeContext = createContext({
  theme: defaultTheme,
  changeTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export interface ThemeProviderProps {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }
  const value = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme])

  return (
    <ThemeContext.Provider value={value}>
      <ThemesProvider theme={theme}>
        <GlobalStyle />
        <Grain src={GrainImage} />
        {children}
      </ThemesProvider>
    </ThemeContext.Provider>
  )
}
