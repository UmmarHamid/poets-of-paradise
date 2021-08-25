import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardTabsScreen from "./src/screens/DashboardTabsScreen"


const RootStack = createNativeStackNavigator();


export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="DashboardTabsScreen" component={DashboardTabsScreen}
          options={{
            headerShown: false,
          }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
