import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Profile from '../pages/Profile';

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
        headerTintColor: '#444',
        drawerPosition: "right",
        headerStyle: {
            backgroundColor: '#444',
            height: 20,
        }
    }
});

export default ProfileStack;