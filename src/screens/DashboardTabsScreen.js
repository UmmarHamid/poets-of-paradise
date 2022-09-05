/**
 * Poets of Paradise
 *
 * @author      Ummar Hamid
 * @copyright   Ummar Hamid
 *
 * Built by Ummar Hamid
 * @link //insert link here
 *
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../themes/colors";
import booksScreen from "./booksScreen";
import poetsScreen from "./poetsScreen";
import homeScreen from "./homeScreen";
import { TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";

const DashboardTabs = createBottomTabNavigator();
const auth = getAuth();
const DashboardTabsScreen = () => {
  return (
    <DashboardTabs.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBaractiveTintColor: Colors.DEEP_TEAL,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: true,
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={() => auth.signOut()}>
            <Ionicons name="log-out-outline" size={36} color="black" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => alert("Open Drawer here")}>
            <Ionicons name="menu" size={36} color="black" />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: Colors.DEEP_TEAL,
        },
        headerTintColor: Colors.BLACK,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <DashboardTabs.Screen
        name="books"
        component={booksScreen}
        options={{
          title: "Books",
          tabBarIcon: (props) => (
            // <BottomBarIcon name="books" active={props.focused} />
            <Ionicons
              name="book-outline"
              active={props.focused}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <DashboardTabs.Screen
        name="home"
        component={homeScreen}
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <Ionicons
              name="home-outline"
              active={props.focused}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <DashboardTabs.Screen
        name="poets"
        component={poetsScreen}
        options={{
          title: "Poets",
          tabBarIcon: (props) => (
            <Ionicons
              name="list-outline"
              active={props.focused}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </DashboardTabs.Navigator>
  );
};

export default DashboardTabsScreen;
