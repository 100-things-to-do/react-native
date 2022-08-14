import { StyleSheet, Text, View, Image, Dimensions, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
const APP_IMAGE = "https://reactjs.org/logo-og.png";
import MaskedView from '@react-native-community/masked-view';
import {APP_NAME} from "../../config";
import {useTranslation} from "react-i18next";

export default function HomeHeader({ containerStyle }) {
    const {t, i18n} = useTranslation();
    return (
        <View style={containerStyle}>
            <View style={styles.headerImageContainer}>
                    <MaskedView
                        style={{ flex: 1 }}
                        maskElement={<LinearGradient style={{ flex: 1 }} colors={['white', 'transparent']} />}
                    >
                        <ImageBackground style={styles.image} source={{ uri: APP_IMAGE }} />
                    </MaskedView>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.centeredText}>
                    {t('challengeYourselfWith')}
                </Text>
                <Text style={styles.appNameText}>
                    {APP_NAME}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerImageContainer: {
        flex: 0.8,
    },
    headerTextContainer: {
        flex: 0.2,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    centeredText: {
        textAlign: 'center',
        marginTop: '2.5%',
        marginBottom: '1.5%',
        color: 'white'
    },
    appNameText: {
        textAlign: 'center',
        marginBottom: '2.5%',
        fontWeight: 'bold',
        color: 'white'
    },

})
