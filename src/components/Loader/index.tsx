import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

import { BounceBall, Container } from './styles'

export function Loader() {
  const position = useRef(new Animated.Value(30)).current
  const height = useRef(new Animated.Value(5)).current
  const scaleX = useRef(new Animated.Value(2)).current
  const borderRadius = useRef(new Animated.Value(20)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(position, {
          toValue: 30,
          duration: 500,
          easing: Easing.bounce,
          useNativeDriver: false
        })
      ])
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(height, {
          toValue: 15,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(height, {
          toValue: 5,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleX, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(scaleX, {
          toValue: 2,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(borderRadius, {
          toValue: 50,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(borderRadius, {
          toValue: 20,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [])

  return (
    <Container>
      <BounceBall
        style={{
          top: position,
          height,
          transform: [{ scaleX }],
          borderRadius: borderRadius.interpolate({
            inputRange: [20, 50],
            outputRange: ['60px 60px 20px 20px', '50px 50px 50px 50px']
          })
        }}
      />
    </Container>
  )
}
