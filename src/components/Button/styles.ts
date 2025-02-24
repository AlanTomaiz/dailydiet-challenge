import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonType = 'DEFAULT' | 'INLINE'

type ButtonProps = {
  type: ButtonType
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 12px;

  /* flex: 1; */
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  border: 1px solid transparent;

  ${({ theme, type }) => {
    return type === 'DEFAULT'
      ? css`
          background-color: ${theme.COLORS.GRAY_600};
        `
      : css`
          border-color: ${theme.COLORS.GRAY_700};
        `
  }}
`

export const Title = styled.Text<ButtonProps>`
  font-weight: bold;
  color: ${({ theme, type }) =>
    type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`
