import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/HomePage';
import CategoryPage from './src/CategoryPage';
import ProfilePage from './src/ProfilePage';
import CategoriesPage from './src/CategoriesPage';
import RevealedCategoryPage from './src/RevealedCategoryPage';
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


