import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardTabsScreen from "../screens/DashboardTabsScreen";
import HomeScreen from "../screens/homeScreen";

const RootStack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="DashboardTabsScreen"
          component={DashboardTabsScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
