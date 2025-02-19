import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import Home from '@screens/home'
import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <Home />
    </ThemeProvider>
  )
}
