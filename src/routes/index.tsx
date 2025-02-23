import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@screens/Home'
import Statistics from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="statistics" component={Statistics} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
