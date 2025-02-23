import React from 'react'
import { Container, InfoTypeStyle } from './styles'

type Props = {
  type?: InfoTypeStyle
  children: React.ReactNode
}

export function InfoCard({ type, children }: Props) {
  return <Container type={type || 'DEFAULT'}>{children}</Container>
}
