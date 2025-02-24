import styled from 'styled-components/native'

export const Container = styled.TextInput`
  padding: 16px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`
