import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Category from './src/pages/Category';
import Profile from './src/pages/Profile';
import Categories from './src/pages/Categories';
import RevealedCategory from './src/pages/RevealedCategory';
const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
        />
        <Stack.Screen
          name="RevealedCategoryPage"
          component={RevealedCategory}
        />
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
        />


        <Stack.Screen
          name="HomePage"
          component={Home}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
        />



      </Stack.Navigator>
    </NavigationContainer>

  );
}


