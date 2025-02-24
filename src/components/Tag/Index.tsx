import { Circle, Container, Label, TagTypeStyle } from './styles'

type Props = {
  type: TagTypeStyle
  label: string
}

export function Tag({ type, label }: Props) {
  return (
    <Container>
      <Circle type={type} />
      <Label>{label}</Label>
    </Container>
  )
}
