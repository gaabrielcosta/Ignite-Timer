import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Routers'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
