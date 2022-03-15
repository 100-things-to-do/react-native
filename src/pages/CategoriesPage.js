import { StyleSheet, Text, View, Animated, Button } from 'react-native';


export default function CategoriesPage({ navigation }) {


    return (
        <View>
            <Button
                onPress={() => { navigation.navigate('CategoryPage'); }}
                title="CategoryPage"
            />
        </View>
    )
}