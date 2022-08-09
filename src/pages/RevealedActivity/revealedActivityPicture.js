import {Image, StyleSheet, View} from "react-native";
import ASSET_URL from "../../../src/config";

const REVEALED_ITEM_BG_COLOR = 'purple'

export default function RevealedActivityPicture({ containerStyle, activity }) {
    return (<View style={containerStyle}>
        <View style={revealedActivityStyles.square}>
            <Image
                style={{flex:2, width: 300}}
                source={{ uri: ASSET_URL + activity.image}}
                resizeMode="cover"
            />
        </View>
    </View>);
}

const revealedActivityStyles = StyleSheet.create({
    square: {
        flex: 1,
        width: 300,
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: REVEALED_ITEM_BG_COLOR
    },
})
