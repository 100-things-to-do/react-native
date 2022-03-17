import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";
const SPLIT_BORDER_COLOR = 'black'


export default function Border() {
    return (
        <View style={styles.splitBorderContainer}>
            <View style={styles.splitBorder}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splitBorderContainer: {
        marginLeft: '5%',
        marginRight: '5%'
    },
    splitBorder: {
        borderWidth: 2,
        borderColor: SPLIT_BORDER_COLOR
    }
})