import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import About from './src/screens/About'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetails from './src/components/products/ProductDetails'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
          <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}} />
          <Stack.Screen name='About' component={About} />
         </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App