import { TextInputProps } from 'react-native'

import { Container } from './styles'

export function Input(inputProps: TextInputProps) {
  return <Container {...inputProps} />
}
