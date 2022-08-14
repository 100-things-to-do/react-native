import { StyleSheet, View, Text, Image } from "react-native";
import {useTranslation} from "react-i18next";

const { achievementData } = require('../../mock/achievementData');

export default function AchievementAcquired({ containerStyle }) {
    const {t, i18n} = useTranslation();

    return (<View style={containerStyle}>
        <Text style={achievementStyles.achievementText}>{t('achievementAcquired')}</Text>
        <Image source={{
            uri: achievementData.imgUrl
        }} style={achievementStyles.achievementImage} />
        <Text style={achievementStyles.achievementText}>{achievementData.name}</Text>
    </View>);
}

const achievementStyles = StyleSheet.create({
    achievementImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
    achievementText: {
        color: '#fff',
        marginRight: '2.5%',
    },
})
