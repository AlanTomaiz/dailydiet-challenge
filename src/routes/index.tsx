import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '@screens/Details'
import FormFinalyze from '@screens/FormFinalyze'
import FormMeal from '@screens/FormMeal'

import Home from '@screens/Home'
import Statistics from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="details" component={Details} />
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="formmeal" component={FormMeal} />
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
