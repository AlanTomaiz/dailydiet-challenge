import { PencilSimpleLine, TrashSimple } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Button } from '@components/Button'
import { Tag } from '@components/Tag/Index'
import { useModal } from '@hooks/useModal'
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

export default function Details() {
  const { COLORS } = useTheme()
  const { execute } = useModal()

  async function handleDeleteMeal() {
    const confirm = await execute()
    if (!confirm) return

    console.log('TO-DO excluir refeição')
  }

  return (
    <Container type="RIGTH">
      <Header>
        <TouchableOpacity>
          <ArrowIcon />
        </TouchableOpacity>
        <PageTitle>Refeição</PageTitle>
      </Header>
      <Content>
        <Title>Sanduíche</Title>
        <Describe>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Describe>
        <Label>Data e hora</Label>
        <Describe>12/12/2025 às 16:00</Describe>
        <Tag type="RIGTH" label="dentro da dieta" />
        <Button
          style={{ marginTop: 'auto' }}
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
