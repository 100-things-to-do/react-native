import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import Topics from '../pages/Categories/Topics';
import Activities from '../pages/Activities/Activities';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import React, {Component} from 'react';
import RevealedActivity from "../pages/RevealedActivity";
import DrawerStack from "./DrawerStack";
import {useTranslation} from "react-i18next";

const Stack = createNativeStackNavigator();

export default function App() {
    const {t, i18n} = useTranslation();

    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"DrawerHome"} component={DrawerStack} options={{ headerShown: false, title: t('home') }}/>
              <Stack.Screen name={"Popular Categories"} component={Topics} options={{headerBackTitle: "Back", title: t('popularCategories')}} />
              <Stack.Screen name={"Activities"} component={Activities} options={{headerBackTitle: "Back", title: t('activities')}}/>
              <Stack.Screen name={"RevealedActivity"} component={RevealedActivity} options={{title: "", headerBackTitle: "Activities"}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}


