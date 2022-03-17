import { StyleSheet, View } from "react-native";

const REVEALED_ITEM_BG_COLOR = 'purple'

export default function RevealedActivity({ containerStyle }) {
    return (<View style={containerStyle}>
        <View style={revealedActivityStyles.square}>
        </View>
    </View>);
}

const revealedActivityStyles = StyleSheet.create({
    square: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: REVEALED_ITEM_BG_COLOR
    },
})