import { StyleSheet, Text, View, Animated, Button } from 'react-native';


export default function ProfilePage({ navigation }) {


    return (
        <View>
            <Button
                onPress={() => { navigation.navigate('CategoriesPage'); }}
                title="CategoriesPage"
            />
        </View>
    )
}