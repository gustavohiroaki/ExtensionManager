import 'react-native-gesture-handler';
import React from 'react';
import './src/services/Reactotron';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

import Main from './src/pages/Main';
import NewExtension from './src/pages/NewExtension';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="NewExtension" component={NewExtension} />
      </Stack.Navigator>
      <FlashMessage position="top" duration={4000} />
    </NavigationContainer>
  );
}
