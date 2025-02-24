import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '@components/Input'

type Props = TextInputProps & {
  name: string
}

export function ControlledInput<InputProps extends FieldValues>({
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
        <Input value={value} onChangeText={onChange} {...rest} />
      )}
    />
  )
}
