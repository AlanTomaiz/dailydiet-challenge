import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Container } from './styles'

type Props = TextInputProps & {
  name: string
}

export function Input<InputProps extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: UseControllerProps<InputProps> & Props) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Container value={value} onChangeText={onChange} {...rest} />
      )}
    />
  )
}
