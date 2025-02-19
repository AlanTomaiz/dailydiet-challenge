import { Text } from 'react-native'

import { Header } from '@components/Header'
import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />
      <Text>Page home</Text>
    </Container>
  )
}
