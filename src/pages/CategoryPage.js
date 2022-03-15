import { ScrollView, StyleSheet, Text, View, Animated, Button } from 'react-native';
import Curtain from '../components/Curtain/';


export default function CurtainPage({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Curtain />
                    <Curtain />
                    <Curtain />

                </View>
                <Button
                    onPress={() => { navigation.navigate('RevealedCategoryPage'); }}
                    title="RevealedCategoryPage"
                />
            </ScrollView>
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