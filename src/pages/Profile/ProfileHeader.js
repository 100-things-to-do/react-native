import { StyleSheet, Text, View, Animated, Button, Image, ScrollView } from 'react-native';
import {useTranslation} from "react-i18next";
const profileName = "Devrim D."; //TODO
const profileImage = "https://reactjs.org/logo-og.png"; //TODO


export default function ProfileHeader({ containerStyle }) {
    const {t, i18n} = useTranslation();

    return (
        <View style={containerStyle}>
            <View style={styles.topImageContainer}>
                <Image source={{
                    uri: profileImage
                }} style={styles.topImage} />
            </View>
            <View style={styles.profileTextContainer}>
                <Text style={styles.profileNameText}>{profileName}</Text>
                <Text style={styles.memoryCountText}>{t('memoryCountText')}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topImageContainer: {
        flex: 0.7,
        marginBottom: '5%'
    },
    profileTextContainer: {
        flex: 0.3,
    },
    topImage: {
        width: '100%',
        height: '100%',
    },
    profileNameText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
    },
    memoryCountText: {
        color: 'white',
        textAlign: 'center',
    }
})
