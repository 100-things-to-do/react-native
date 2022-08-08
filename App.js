import {NavigationContainer} from "@react-navigation/native";
import Topics from './src/pages/Categories/Topics';
import Activities from './src/pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/pages/Home';
const Drawer = createDrawerNavigator();
import React, {Component} from 'react';

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name={"Home"} component={Home}></Drawer.Screen>
              <Drawer.Screen name={"Topics"} component={Topics}></Drawer.Screen>
              <Drawer.Screen name={"Activities"} component={Activities}></Drawer.Screen>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}


