import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Categories from '../pages/Categories';

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
        headerTintColor: '#444',
        drawerPosition: "right",
        headerStyle: {
            backgroundColor: '#444',
            height: 20,
        }
    }
});

export default CategoriesStack;