import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Routers'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Routers />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
