import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 8px;
`

export const SectionMeatTitle = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin-bottom: 8px;
`

export const SectionMeal = styled.View`
  margin: 40px 0 32px;
`

export const PercentageArrowButton = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;
`
