import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import DetailPage from './src/pages/DetailPage';

const Stack = createStackNavigator();

function MyActivity() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{title: 'Detail Listing #80889'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyActivity />
    </NavigationContainer>
  );
}
