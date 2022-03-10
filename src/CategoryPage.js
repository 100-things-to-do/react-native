import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import Curtain from './Curtain';


export default function CurtainPage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Curtain />
                <Curtain />
                <Curtain />
            </View>
            <Button
                onPress={() => { navigation.navigate('RevealedCategoryPage'); }}
                title="RevealedCategoryPage"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});