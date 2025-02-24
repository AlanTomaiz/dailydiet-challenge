import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 1000px;
  align-self: flex-start;
`

export type TagTypeStyle = 'RIGTH' | 'WRONG'
type CircleProps = {
  type: TagTypeStyle
}

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ theme, type }) =>
    type === 'RIGTH' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
