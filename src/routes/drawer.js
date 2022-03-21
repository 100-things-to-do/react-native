import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CategoriesStack from './CategoriesStack'
const { HEADER_BG_COLOR, HEADER_TINT_COLOR, HEADER_HEIGHT } = require('../styles/global')

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    Categories: {
        screen: CategoriesStack,
    }
});

export default createAppContainer(RootDrawerNavigator);