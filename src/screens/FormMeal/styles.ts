import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Header = styled.View`
  flex-direction: row;
  padding: 24px;
`

export const PageTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const BackPageBtn = styled(TouchableOpacity)`
  align-self: flex-start;
`

export const Content = styled.View`
  flex: 1;
  gap: 24px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const InputWrapper = styled.View`
  gap: 8px;
`

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 24
}))``
