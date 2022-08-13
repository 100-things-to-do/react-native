import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import Topics from '../pages/Categories/Topics';
import Activities from '../pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import React, {Component} from 'react';
import RevealedActivity from "../pages/RevealedActivity";
import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"DrawerHome"} component={DrawerStack} options={{ headerShown: false, title: "Home" }}/>
              <Stack.Screen name={"Popular Categories"} component={Topics} options={{headerBackTitle: "Back"}} />
              <Stack.Screen name={"Activities"} component={Activities} options={{headerBackTitle: "Back"}}/>
              <Stack.Screen name={"RevealedActivity"} component={RevealedActivity} options={{title: "", headerBackTitle: "Activities"}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}


