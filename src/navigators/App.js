import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import Topics from '../pages/Categories/Topics';
import Activities from '../pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import React, {Component} from 'react';
import RevealedActivity from "../pages/RevealedActivity";
import TopicsNavigator from "./TopicsNavigator";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={"Home"} component={Home}></Drawer.Screen>
              <Drawer.Screen
                  name={"Topics"}
                  component={TopicsNavigator}
                  options={{headerShown: false}}
              ></Drawer.Screen>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}


