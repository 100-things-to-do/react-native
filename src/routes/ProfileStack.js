import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Profile from '../pages/Profile';
const { HEADER_BG_COLOR, HEADER_TINT_COLOR, HEADER_HEIGHT } = require('../styles/global')
const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
};

// home stack navigator screens
const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: HEADER_TINT_COLOR,
        drawerPosition: "right",
        headerStyle: {
            backgroundColor: HEADER_BG_COLOR,
            height: HEADER_HEIGHT,
        }
    }
});

export default ProfileStack;