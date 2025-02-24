import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image } from 'react-native'

import HappyImage from '@assets/happy.png'
import SadImage from '@assets/sad.png'

import { Container, Message, PageType, Strong, Title } from './styles'

export default function FormFinalyze() {
  const router = useRoute()
  const navigation = useNavigation()

  const { type } = router.params as { type: PageType }

  useEffect(() => {
    setTimeout(() => navigation.navigate('home'), 2000)
  }, [])

  return (
    <Container>
      {type === 'RIGTH' ? (
        <>
          <Title type="RIGTH">Continue Assim!</Title>
          <Message>
            Você continua <Strong>dentro da dieta</Strong>. Muito bem!
          </Message>
          <Image source={HappyImage} />
        </>
      ) : (
        <>
          <Title type="WRONG">Que pena!</Title>
          <Message>
            Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
            esforçando e não desista!
          </Message>
          <Image source={SadImage} />
        </>
      )}
    </Container>
  )
}
