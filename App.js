import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/HomePage';
import CategoryPage from './src/pages/CategoryPage';
import ProfilePage from './src/pages/ProfilePage';
import CategoriesPage from './src/pages/CategoriesPage';
import RevealedCategoryPage from './src/pages/RevealedCategoryPage';
const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
        />
        <Stack.Screen
          name="CategoryPage"
          component={CategoryPage}
        />
        <Stack.Screen
          name="CategoriesPage"
          component={CategoriesPage}
        />
        <Stack.Screen
          name="RevealedCategoryPage"
          component={RevealedCategoryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


