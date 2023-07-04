import { ThemeProvider } from "@emotion/react"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        {children}
    </ThemeProvider>
    )
}
