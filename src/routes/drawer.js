import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CategoriesStack from './CategoriesStack'

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