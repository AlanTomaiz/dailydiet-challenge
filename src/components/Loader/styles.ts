import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BounceBall = styled(Animated.View)`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: #fbae17;
`
