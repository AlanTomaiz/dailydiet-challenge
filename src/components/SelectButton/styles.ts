import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyle = 'RIGTH' | 'WRONG'
type Props = {
  type: ButtonTypeStyle
  active: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  height: 50px;

  border-radius: 6px;
  border: 1px solid transparent;

  ${({ theme, type, active }) => {
    if (type === 'RIGTH' && active) {
      return css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
        border-color: ${theme.COLORS.GREEN_DARK};
      `
    }

    if (type === 'WRONG' && active) {
      return css`
        background-color: ${theme.COLORS.RED_LIGHT};
        border-color: ${theme.COLORS.RED_DARK};
      `
    }

    return css`
      background-color: ${theme.COLORS.GRAY_200};
    `
  }}
`

type CircleProps = {
  type: ButtonTypeStyle
}

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ theme, type }) =>
    type === 'RIGTH' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
