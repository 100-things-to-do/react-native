import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Categories from '../pages/Categories/Categories';
const { HEADER_BG_COLOR, HEADER_TINT_COLOR, HEADER_HEIGHT } = require('../styles/global')

const screens = {
    Categories: {
        screen: Categories,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
};

// home stack navigator screens
const CategoriesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: HEADER_TINT_COLOR,
        drawerPosition: "right",
        headerStyle: {
            backgroundColor: HEADER_BG_COLOR,
            height: HEADER_HEIGHT,
        }
    }
});

export default CategoriesStack;