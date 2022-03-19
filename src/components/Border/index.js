import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";
const SPLIT_BORDER_COLOR = 'black'


export default function Border({ noMargin, color }) {

    console.log(styles.splitBorder)
    return (
        <View style={noMargin ? null : styles.splitBorderContainer}>
            <View style={color ? { ...styles.splitBorder, borderColor: color } : styles.splitBorder}>
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