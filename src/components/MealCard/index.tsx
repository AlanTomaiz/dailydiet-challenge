import {
  Container,
  Describe,
  MealIcon,
  MealTypeStyle,
  Separate,
  Time
} from './styles'

type Props = {
  time: string
  meal: string
  type?: MealTypeStyle
}

export function MealCard({ time, meal, type = 'RIGTH' }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <Separate />
      <Describe ellipsizeMode="tail" numberOfLines={1}>
        {meal}
      </Describe>
      <MealIcon type={type} />
    </Container>
  )
}
