import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { formatDate } from '@utils/formate'
import {
  ArrowIcon,
  BackPageBtn,
  Container,
  Content,
  Header,
  InputWrapper,
  Label,
  PageTitle
} from './styles'

type FormInput = {
  name: string
  describe: string
  date: string
  time: string
  onDiet: 'RIGTH' | 'WRONG'
}

export default function FormMeal() {
  const navigation = useNavigation()

  const { control, handleSubmit, setValue, watch } = useForm<FormInput>()
  const watchValueDiet = watch('onDiet')

  const data = new Date()
  data.setHours(data.getHours() - 3)

  function execute(data: FormInput) {
    console.log(data)
    navigation.navigate('formfinalyze', { type: data.onDiet })
  }

  function onChange(input: 'date' | 'time', selectedDate?: Date) {
    const parsed = formatDate(selectedDate)
    setValue(input, parsed[input])
  }

  function showDateOrTimePicker(mode: 'date' | 'time') {
    DateTimePickerAndroid.open({
      value: data,
      onChange: (_, date?: Date) => onChange(mode, date),
      mode,
      is24Hour: true,
      display: 'spinner'
    })
  }

  return (
    <Container>
      <Header>
        <BackPageBtn onPress={() => navigation.navigate('home')}>
          <ArrowIcon />
        </BackPageBtn>
        <PageTitle>Nova Refeição</PageTitle>
      </Header>
      <Content>
        <InputWrapper>
          <Label>Nome</Label>
          <Input control={control} name="name" />
        </InputWrapper>
        <InputWrapper>
          <Label>Descrição</Label>
          <Input
            control={control}
            name="describe"
            multiline
            numberOfLines={10}
            style={{ height: 150, textAlignVertical: 'top' }}
          />
        </InputWrapper>
        <InputWrapper style={{ flexDirection: 'row', gap: 24 }}>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Data</Label>
            <Input
              control={control}
              name="date"
              onPressIn={() => showDateOrTimePicker('date')}
            />
          </InputWrapper>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Hora</Label>
            <Input
              control={control}
              name="time"
              onPressIn={() => showDateOrTimePicker('time')}
            />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper style={{ flex: 1 }}>
          <Label>Está dentro da dieta?</Label>
          <InputWrapper style={{ flexDirection: 'row', gap: 24 }}>
            <SelectButton
              type="RIGTH"
              label="Sim"
              active={watchValueDiet === 'RIGTH'}
              onPress={() => setValue('onDiet', 'RIGTH')}
            />
            <SelectButton
              type="WRONG"
              label="Não"
              active={watchValueDiet === 'WRONG'}
              onPress={() => setValue('onDiet', 'WRONG')}
            />
          </InputWrapper>
        </InputWrapper>
        <Button title="Cadastrar refeição" onPress={handleSubmit(execute)} />
      </Content>
    </Container>
  )
}
