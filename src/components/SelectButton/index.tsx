import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyle, Circle, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  label: string
  active: boolean
  type: ButtonTypeStyle
}

export function SelectButton({ label, active, type, ...rest }: Props) {
  return (
    <Container type={type} active={active} {...rest}>
      <Circle type={type} />
      <Title>{label}</Title>
    </Container>
  )
}
