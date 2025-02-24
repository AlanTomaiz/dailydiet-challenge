import { useNavigation, useRoute } from '@react-navigation/native'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Button } from '@components/Button'
import { Tag } from '@components/Tag/Index'
import { useModal } from '@hooks/useModal'
import { MealType, useStorage } from '@hooks/useStorage'
import { formatDate } from '@utils/formate'
import { useEffect, useState } from 'react'
import {
  ArrowIcon,
  Container,
  Content,
  Describe,
  Header,
  Label,
  PageTitle,
  Title
} from './styles'

type RouteParams = {
  mealId: number
}

export default function Details() {
  const { COLORS } = useTheme()
  const { execute } = useModal()
  const { deleteMeal, getDataById } = useStorage()
  const router = useRoute()
  const navigation = useNavigation()

  const { mealId } = router.params as RouteParams

  const [meal, setMeal] = useState<MealType>({} as MealType)

  async function handleDeleteMeal() {
    const confirm = await execute()
    if (!confirm) return

    await deleteMeal(mealId)
    navigation.navigate('home')
  }

  useEffect(() => {
    ;(async () => {
      const storage = await getDataById(mealId)
      if (!storage) {
        return navigation.navigate('home')
      }

      setMeal(storage)
    })()
  }, [mealId])

  return (
    <Container type={meal.onDiet}>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <ArrowIcon />
        </TouchableOpacity>
        <PageTitle>Refeição</PageTitle>
      </Header>
      <Content>
        <Title>{meal.name}</Title>
        <Describe>{meal.describe}</Describe>
        <Label>Data e hora</Label>
        <Describe>
          {formatDate(meal.date).date} às {formatDate(meal.date).time}
        </Describe>
        <Tag
          type={meal.onDiet}
          label={meal.onDiet === 'RIGTH' ? 'dentro da dieta' : 'fora da dieta'}
        />
        <Button
          style={{ marginTop: 'auto' }}
          onPress={() => navigation.navigate('formmeal', { mealId })}
          title="Editar refeição"
          icon={<PencilSimpleLine size={18} color={COLORS.GRAY_100} />}
        />
        <Button
          type="INLINE"
          title="Excluir refeição"
          icon={<TrashSimple size={18} color={COLORS.GRAY_700} />}
          onPress={handleDeleteMeal}
        />
      </Content>
    </Container>
  )
}
