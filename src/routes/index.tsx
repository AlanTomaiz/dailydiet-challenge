import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormFinalyze from '@screens/FormFinalyze'
import FormMeat from '@screens/FormMeat'

import Home from '@screens/Home'
import Statistics from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="formmeat" component={FormMeat} />
      <Screen name="formfinalyze" component={FormFinalyze} />
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
