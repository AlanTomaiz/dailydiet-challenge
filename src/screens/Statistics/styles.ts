import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Header = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;

  padding: 24px 24px 34px;
`

export const BackPageBtn = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 1
}))`
  align-self: flex-start;
`

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_500};
  `}
`

export const Content = styled.View`
  flex: 1;
  gap: 12px;

  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const SectionTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin: 12px 0;
`

export const InfoTitle = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const InfoDescribe = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const InfoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`
