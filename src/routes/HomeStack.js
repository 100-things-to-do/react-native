import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../pages/Home';
const { HEADER_BG_COLOR, HEADER_TINT_COLOR, HEADER_HEIGHT } = require('../styles/global')

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: HEADER_TINT_COLOR,
        drawerPosition: "right",
        headerStyle: {
            backgroundColor: HEADER_BG_COLOR,
            height: HEADER_HEIGHT,
        }
    }
});

export default HomeStack;