import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/components/products/ProductDetails';
import Cart from './src/screens/Cart';
import CheckOut from './src/screens/CheckOut';
import Payment from './src/screens/Payment';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Account from './src/screens/account/Account';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name='account' component={Account} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
