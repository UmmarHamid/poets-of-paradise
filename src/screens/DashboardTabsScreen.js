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
import { Ionicons } from '@expo/vector-icons';
import BottomBarIcon from "../components/icons/BottomBarIcon";
import { Colors } from "../themes/colors";

import booksScreen from "./booksScreen";
import poetsScreen from "./poetsScreen";
import homeScreen from "./homeScreen";
import { Button, Text, TouchableOpacity } from "react-native";



const DashboardTabs = createBottomTabNavigator();

const DashboardTabsScreen = () => (
    <DashboardTabs.Navigator
        initialRouteName="home"
        screenOptions={{
            tabBaractiveTintColor: Colors.DEEP_TEAL,
            tabBarLabelStyle: {
                fontSize: 12,
            },
            tabBarShowLabel: true,
            headerShown: true,
            headerLeft: () => (
                <TouchableOpacity onPress={() => alert("Open Drawer here")}>
                    <Ionicons name="menu" size={36} color="black" />
                </TouchableOpacity>
            ),
            headerStyle: {
                backgroundColor: Colors.DEEP_TEAL
            },
            headerTintColor: Colors.BLACK,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <DashboardTabs.Screen
            name="books" component={booksScreen}
            options={{ title: "Books", tabBarIcon: props => <BottomBarIcon name="journey" active={props.focused} /> }} />
        <DashboardTabs.Screen
            name="home" component={homeScreen}
            options={{ title: "Home", tabBarIcon: props => <BottomBarIcon name="home" active={props.focused} /> }} />
        <DashboardTabs.Screen
            name="poets" component={poetsScreen}
            options={{ title: "Poets", tabBarIcon: props => <BottomBarIcon name="goals" active={props.focused} /> }} />
    </DashboardTabs.Navigator>
);

export default DashboardTabsScreen;
