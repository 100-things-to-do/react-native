import {NavigationContainer} from "@react-navigation/native";
import Topics from '../pages/Categories/Topics';
import Activities from '../pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import React, {Component} from 'react';
import RevealedActivity from "../pages/RevealedActivity";
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function DrawerStack() {
    return (
                <Drawer.Navigator>
                    <Drawer.Screen name={"Home"} component={Home} options={{ title: "Home"}}/>
                    <Drawer.Screen name={"Topics"} component={Topics} options={{ title: "Topics"}}/>
                    <Drawer.Screen name={"Profile"} component={Profile} options={{ title: "Profile"}}/>
                </Drawer.Navigator>
    );
}


