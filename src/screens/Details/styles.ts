import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export type PageTypeProps = 'RIGTH' | 'WRONG'
type PageProps = {
  type: PageTypeProps
}

export const Container = styled(SafeAreaView)<PageProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'RIGTH' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Header = styled.View`
  flex-direction: row;
  padding: 24px;
`

export const PageTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const Content = styled.View`
  flex: 1;
  gap: 8px;
  padding: 40px 24px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const Describe = styled.Text`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 24
}))``
