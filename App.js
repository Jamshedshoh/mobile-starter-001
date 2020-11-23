import React from 'react';

import {
  StyleSheet,
  Button,
  Text,
  View,
  IconButton
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { color } from 'react-native-reanimated';

import { Icon } from 'react-native-elements';

const Auth = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ 
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => {
  return (
    <>
      <RootNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  menuIconBox: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    padding: 15
  }
  
});

export default App;
