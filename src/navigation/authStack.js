import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/pre-login/Welcome";
import SignInScreen from "../screens/pre-login/Sign-In";
import SignUpScreen from "../screens/pre-login/SignUp";

const RootStack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Sign In" component={SignInScreen} />
        <RootStack.Screen name="Sign Up" component={SignUpScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
