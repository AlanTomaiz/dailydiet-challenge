import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;

  background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled.View`
  align-items: center;
  justify-content: center;

  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Message = styled.Text`
  ${({ theme }) => css`
    width: 280px;
    text-align: center;
    font-weight: bold;
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const ButtonWrapper = styled.View`
  max-width: 280px;
  flex-direction: row;
  gap: 12px;

  margin-top: 32px;
`
