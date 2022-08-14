import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {useTranslation} from "react-i18next";

const AD_BUTTON_COLOR = '#685269'
const AD_BUTTON_BORDER_COLOR = '#ED44F5';
const CURTAIN_JPEG = require('../../../assets/video2-white.png')

export default function AdButton({ containerStyle }) {
    const {t, i18n} = useTranslation();
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={adButtonStyles.adButton} activeOpacity={0.5}>
                <Image
                    source={CURTAIN_JPEG}
                    style={adButtonStyles.adButtonImage}
                />
                <Text style={adButtonStyles.adButtonTextStyle}>{t('newAdventureButton')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const adButtonStyles = StyleSheet.create({
    adButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AD_BUTTON_COLOR,
        borderWidth: 1,
        borderColor: AD_BUTTON_BORDER_COLOR,
        height: 40,
        borderRadius: 10,
        margin: 5,
    },
    adButtonImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
    adButtonTextStyle: {
        color: '#fff',
        marginRight: '2.5%',
    },
})
