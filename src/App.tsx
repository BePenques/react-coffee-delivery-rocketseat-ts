import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartProvider'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
          <GlobalStyle />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
