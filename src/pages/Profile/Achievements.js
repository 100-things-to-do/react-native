import { StyleSheet, Text, View, Animated, Button, Image, ScrollView } from 'react-native';
import {useTranslation} from "react-i18next";
const CURTAIN_JPEG = require('../../../assets/video2-white.png')


export default function Achievements({ containerStyle }) {
    const {t, i18n} = useTranslation();
    return (
        <View style={containerStyle}>
            <View style={styles.achievementsTextContainer}>
                <Text style={styles.achievementsText}>
                    {t('achievements')}
                </Text>
            </View>
            <ScrollView
                horizontal={true}
                style={styles.achievementsScrollContainer}
            >
                <Image source={CURTAIN_JPEG} style={styles.achievementImage} />
                <Image source={CURTAIN_JPEG} style={styles.achievementImage} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    achievementImage: {
        height: 30,
        width: 30,
    },
    achievementsTextContainer: {
        flex: 0.7,
        marginTop: '2.5%',
    },
    achievementsText: {
        textAlign: 'center',
        color: 'white'
    },
    achievementsScrollContainer: {
        flex: 0.2,
        marginBottom: '2.5%',
        marginLeft: '2.5%',
        marginRight: '2.5%'
    }
})
