import { Button } from '@components/Button'
import { useModal } from '@hooks/useModal'
import { Modal as ReactNativeModal } from 'react-native'
import { ButtonWrapper, Container, Content, Message } from './styles'

export function Modal() {
  const { isOpen, actions } = useModal()

  return (
    <ReactNativeModal
      visible={isOpen}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <Container>
        <Content>
          <Message>Deseja realmente excluir o registro da refeição?</Message>
          <ButtonWrapper>
            <Button
              style={{ flex: 1 }}
              type="INLINE"
              title="Cancelar"
              onPress={() => actions.reject()}
            />
            <Button
              style={{ flex: 1 }}
              title="Sim, excluir"
              onPress={() => actions.resolve()}
            />
          </ButtonWrapper>
        </Content>
      </Container>
    </ReactNativeModal>
  )
}
