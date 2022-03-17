import { StyleSheet, Text, View, Animated, Button } from 'react-native';


export default function Profile({ navigation }) {


    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
            <Button
                onPress={() => { navigation.navigate('CategoriesPage'); }}
                title="CategoriesPage"
            />
        </View>
    )
}