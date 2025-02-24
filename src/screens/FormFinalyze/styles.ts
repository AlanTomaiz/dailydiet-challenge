import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`

export type PageType = 'RIGTH' | 'WRONG'
type Props = {
  type: PageType
}

export const Title = styled.Text<Props>`
  font-weight: bold;

  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'RIGTH'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 40px;
`

export const Strong = styled.Text`
  font-weight: bold;
`
