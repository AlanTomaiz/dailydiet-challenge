import { TouchableOpacityProps } from 'react-native'

import { ButtonType, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonType
  icon?: JSX.Element
  title: string
}

export function Button({ title, type, icon, ...rest }: Props) {
  return (
    <Container type={type || 'DEFAULT'} {...rest}>
      {icon}
      <Title type={type || 'DEFAULT'}>{title}</Title>
    </Container>
  )
}
