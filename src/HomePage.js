import { StyleSheet, Text, View, Animated, Button } from 'react-native';


export default function HomePage({ navigation }) {
    return (
        <View>
            <Button
                onPress={() => { navigation.navigate('CategoriesPage'); }}
                title="CategoriesPage"
            />
            <Button
                onPress={() => { navigation.navigate('ProfilePage'); }}
                title="ProfilePage"
            />
        </View>
    )
}