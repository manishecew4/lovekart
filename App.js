import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import Signin from './src/screens/Signin'
import Signup from './src/screens/Signup'
import FriendsDetails from './src/screens/FriendsDetails'
import TabBar from './src/route/TabBar'
import Home from './src/screens/Home'
import { StyleSheet } from 'react-native'

const App = () => {

  const Stack = createNativeStackNavigator()

  // New test

  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="FriendsDetails" component={FriendsDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})