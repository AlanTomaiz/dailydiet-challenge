import {
  Container,
  Describe,
  MeatIcon,
  MeatTypeStyle,
  Separate,
  Time
} from './styles'

type Props = {
  time: string
  meat: string
  type?: MeatTypeStyle
}

export function MeatCard({ time, meat, type = 'ACCEPT' }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <Separate />
      <Describe ellipsizeMode="tail" numberOfLines={1}>
        {meat}
      </Describe>
      <MeatIcon type={type} />
    </Container>
  )
}
