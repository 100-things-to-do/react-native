import { StyleSheet, Text, View, Animated, Button, Image, ScrollView } from 'react-native';
const profileName = "Devrim D.";
const memoryCountText = "Have 13 good memories!";

const profileImage = "https://reactjs.org/logo-og.png";


export default function ProfileHeader({ containerStyle }) {
    return (
        <View style={containerStyle}>
            <View style={styles.topImageContainer}>
                <Image source={{
                    uri: profileImage
                }} style={styles.topImage} />
            </View>
            <View style={styles.profileTextContainer}>
                <Text style={styles.profileNameText}>{profileName}</Text>
                <Text style={styles.memoryCountText}>{memoryCountText}</Text>

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