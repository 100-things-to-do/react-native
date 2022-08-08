import {NavigationContainer} from "@react-navigation/native";
import Topics from '../pages/Categories/Topics';
import Activities from '../pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import React, {Component} from 'react';
import RevealedActivity from "../pages/RevealedActivity";

const Stack = createNativeStackNavigator();
export default function TopicsNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name={"Topics"} component={Topics}></Stack.Screen>
                <Stack.Screen name={"Activities"} component={Activities}></Stack.Screen>
                <Stack.Screen name={"RevealedActivity"} component={RevealedActivity}></Stack.Screen>
            </Stack.Navigator>
    );
}


