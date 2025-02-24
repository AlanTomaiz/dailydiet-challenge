import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 16px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  overflow: hidden;
`

export const Separate = styled.View`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Time = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: bold;
`

export const Describe = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export type MeatTypeStyle = 'RIGTH' | 'WRONG'
type MeatType = {
  type: MeatTypeStyle
}

export const MeatIcon = styled.View<MeatType>`
  width: 15px;
  height: 15px;

  border-radius: 9999px;
  background-color: ${({ theme, type }) =>
    type === 'RIGTH' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
