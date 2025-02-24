import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Describe,
  MealIcon,
  MealTypeStyle,
  Separate,
  Time
} from './styles'

type Props = TouchableOpacityProps & {
  time: string
  meal: string
  type?: MealTypeStyle
}

export function MealCard({ time, meal, type = 'RIGTH', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Separate />
      <Describe ellipsizeMode="tail" numberOfLines={1}>
        {meal}
      </Describe>
      <MealIcon type={type} />
    </Container>
  )
}
