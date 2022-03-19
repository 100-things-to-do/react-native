import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const APP_IMAGE = "https://reactjs.org/logo-og.png";


export default function HomeHeader({ containerStyle }) {
    return (
        <View style={containerStyle}>
            <View style={styles.headerImageContainer}>
                <Image
                    source={{ uri: APP_IMAGE }}
                    style={styles.image}
                />
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.centeredText}>
                    Challange yourself with
                </Text>
                <Text style={styles.appNameText}>
                    Activify
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