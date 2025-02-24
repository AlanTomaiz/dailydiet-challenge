import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { Loader } from '@components/Loader'
import { ModalProvider } from '@hooks/useModal'
import Routes from './src/routes'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        {!fontsLoaded ? <Loader /> : <Routes />}
        <StatusBar style="light" translucent />
      </ModalProvider>
    </ThemeProvider>
  )
}
