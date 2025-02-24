import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'

import { InfoCard } from '@components/InfoCard'
import { MealType, useStorage } from '@hooks/useStorage'
import {
  BackPageBtn,
  Container,
  Content,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  InfoDescribe,
  InfoTitle,
  InfoWrapper,
  SectionTitle
} from './styles'

type StateType = {
  meals: MealType[]
  percentage: number
  bestSequence: number
  inDiet: number
  offDiet: number
}

export default function Statistics() {
  const { COLORS } = useTheme()
  const { getData } = useStorage()
  const navigation = useNavigation()

  const [meals, setMeals] = useState<StateType>({
    meals: [],
    percentage: 0,
    bestSequence: 0,
    inDiet: 0,
    offDiet: 0
  })

  useEffect(() => {
    ;(async () => {
      const storage = await getData()

      // Percentage
      const total = storage.length
      const onDietCount = storage.filter(
        (item) => item.onDiet === 'RIGTH'
      ).length

      // Best sequence
      let maxStreak = 0
      let currentStreak = 0
      storage.forEach((row) => {
        if (row.onDiet === 'RIGTH') {
          currentStreak++
          maxStreak = Math.max(maxStreak, currentStreak)
        } else {
          currentStreak = 0
        }
      })

      setMeals({
        meals: storage,
        percentage: (onDietCount / total) * 100 || 0,
        bestSequence: maxStreak,
        inDiet: onDietCount,
        offDiet: total - onDietCount
      })
    })()
  }, [])

  return (
    <Container>
      <Header>
        <BackPageBtn onPress={() => navigation.navigate('home')}>
          <ArrowLeft size={24} color={COLORS.GREEN_DARK} />
        </BackPageBtn>
        <HeaderTitle>{meals.percentage.toFixed(2) + '%'}</HeaderTitle>
        <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
      </Header>
      <Content>
        <SectionTitle>Estatísticas gerais</SectionTitle>
        <InfoCard>
          <InfoTitle>{meals.bestSequence}</InfoTitle>
          <InfoDescribe>
            melhor sequência de pratos dentro da dieta
          </InfoDescribe>
        </InfoCard>
        <InfoCard>
          <InfoTitle>{meals.meals.length}</InfoTitle>
          <InfoDescribe>refeições registradas</InfoDescribe>
        </InfoCard>
        <InfoWrapper>
          <InfoCard type="SUCCESS">
            <InfoTitle>{meals.inDiet}</InfoTitle>
            <InfoDescribe>refeições dentro da dieta</InfoDescribe>
          </InfoCard>
          <InfoCard type="DANGER">
            <InfoTitle>{meals.offDiet}</InfoTitle>
            <InfoDescribe>refeições fora da dieta</InfoDescribe>
          </InfoCard>
        </InfoWrapper>
      </Content>
    </Container>
  )
}
