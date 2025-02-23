import styled, { css } from 'styled-components/native'

export type InfoTypeStyle = 'DEFAULT' | 'SUCCESS' | 'DANGER' | 'TEXT'

type InfoCardProps = {
  type: InfoTypeStyle
}

export const Container = styled.View<InfoCardProps>`
  position: relative;

  align-items: center;
  justify-content: center;

  ${({ theme, type }) => {
    if (type === 'TEXT') return

    const bgColors = {
      DEFAULT: theme.COLORS.GRAY_200,
      SUCCESS: theme.COLORS.GREEN_LIGHT,
      DANGER: theme.COLORS.RED_LIGHT
    }

    return css`
      padding: 20px 16px;
      border-radius: 8px;
      background-color: ${bgColors[type]};
    `
  }}
`
