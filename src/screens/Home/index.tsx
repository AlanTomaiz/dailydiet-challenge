import { useNavigation } from '@react-navigation/native'
import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { SectionList, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { InfoCard } from '@components/InfoCard'
import { MealCard } from '@components/MealCard'
import { MealType, useStorage } from '@hooks/useStorage'
import { formatDate } from '@utils/formate'
import { orderByDate } from '@utils/order'
import {
  Container,
  PercentageArrowButton,
  SectionMeal,
  SectionMealTitle,
  SectionTitle,
  Subtitle,
  Title
} from './styles'

type InOrderMealsType = {
  date: string
  data: MealType[]
}

export default function Home() {
  const { COLORS } = useTheme()
  const { getData } = useStorage()
  const navigation = useNavigation()

  const [data, setData] = useState<InOrderMealsType[]>([])
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    ;(async () => {
      const storage = await getData()
      const inOrderMeals = storage.reduce((acc, cur) => {
        const labelDate = formatDate(cur.date).date.replaceAll('/', '.')
        const index = acc.findIndex((row) => row.date === labelDate)

        if (index === -1) {
          acc.push({
            date: labelDate,
            data: [cur]
          })
        } else {
          acc[index].data.push(cur)
          acc[index].data = acc[index].data.sort(orderByDate)
        }

        return acc
      }, [] as InOrderMealsType[])

      const total = storage.length
      const onDietCount = storage.filter(
        (item) => item.onDiet === 'RIGTH'
      ).length

      setPercent((onDietCount / total) * 100)
      setData(inOrderMeals)
    })()
  }, [])

  return (
    <Container>
      <Header />

      <TouchableOpacity onPress={() => navigation.navigate('statistics')}>
        <InfoCard type={percent > 60 ? 'SUCCESS' : 'DANGER'}>
          <Title>{percent.toFixed(2) + '%'}</Title>
          <Subtitle>das refeições dentro da dieta</Subtitle>
          <PercentageArrowButton>
            <ArrowUpRight
              size={24}
              color={percent > 60 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            />
          </PercentageArrowButton>
        </InfoCard>
      </TouchableOpacity>

      <SectionMeal>
        <SectionTitle>Refeições</SectionTitle>
        <Button
          onPress={() => navigation.navigate('formmeal')}
          icon={<Plus color={COLORS.WHITE} size={18} />}
          type="DEFAULT"
          title="Nova refeição"
        />
      </SectionMeal>

      <SectionList
        sections={data}
        keyExtractor={(item) => item.id + item.name}
        renderItem={({ item }) => (
          <MealCard
            onPress={() => navigation.navigate('details', { mealId: item.id })}
            time={formatDate(item.date).time}
            meal={item.name}
            type={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionMealTitle>{date}</SectionMealTitle>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Container>
  )
}
