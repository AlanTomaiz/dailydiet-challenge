import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { ControlledInput } from '@components/ControledInput'
import { Input } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { MealType, useStorage } from '@hooks/useStorage'
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

type RouteParams = {
  mealId: number
}

export default function FormMeal() {
  const { setData, getDataById } = useStorage()
  const navigation = useNavigation()
  const router = useRoute()

  const today = new Date()
  today.setHours(today.getHours() - 3)
  const params = (router.params as RouteParams) || {}

  const { control, handleSubmit, setValue, watch, reset } = useForm<MealType>()
  const [date, setDate] = useState<Date>()

  const watchValueDiet = watch('onDiet')

  async function execute(data: MealType) {
    await setData({
      ...data,
      id: data.id || new Date().getTime()
    })

    navigation.navigate('formfinalyze', { type: data.onDiet })
  }

  function onChange(selectedDate: Date) {
    setDate(selectedDate)
    setValue('date', selectedDate)
  }

  function showDateOrTimePicker(mode: 'date' | 'time') {
    DateTimePickerAndroid.open({
      value: date || today,
      onChange: (_, date?: Date) => onChange(date as Date),
      mode,
      is24Hour: true,
      display: 'spinner'
    })
  }

  useEffect(() => {
    ;(async () => {
      const storage = await getDataById(params.mealId)
      if (!storage) {
        return
      }

      reset(storage)
      setDate(storage.date)
    })()
  }, [])

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
          <ControlledInput control={control} name="name" />
        </InputWrapper>
        <InputWrapper>
          <Label>Descrição</Label>
          <ControlledInput
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
              value={date && formatDate(date).date}
              onPressIn={() => showDateOrTimePicker('date')}
            />
          </InputWrapper>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Hora</Label>
            <Input
              value={date && formatDate(date).time}
              onPressIn={() => showDateOrTimePicker('time')}
            />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper>
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
        <Button
          title={params.mealId ? 'Salvar Alteração' : 'Cadastrar refeição'}
          style={{ marginTop: 'auto' }}
          onPress={handleSubmit(execute)}
        />
      </Content>
    </Container>
  )
}
