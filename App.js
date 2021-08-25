import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainContainerView from "./src/components/MainContainerView";

export default function App() {
  return (
    <NavigationContainer>
      <MainContainerView>
        <Text>Poets of Paradise</Text>
      </MainContainerView>
    </NavigationContainer>
  );
}


