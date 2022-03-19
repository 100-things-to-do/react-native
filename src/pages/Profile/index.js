import { StyleSheet, Text, View, Animated, Button, Image, ScrollView } from 'react-native';
import Border from '../../components/Border'
import Achievements from './Achievements';
import ProfileHeader from './ProfileHeader';
import FavoriteList from './FavoriteList';
const FAVORITE_LIST_TEXT = 'Your Favorite List'

export default function Profile({ navigation }) {


    return (
        <View style={{ flex: 1, backgroundColor: '#1C658C' }}>
            <View style={styles.pageContainer}>
                <ProfileHeader containerStyle={styles.profileHeaderContainer} />
                <Border noMargin color={'white'} />
                <Achievements containerStyle={styles.achievementsContainer} />
                <Border noMargin color={'white'} />
                <Text style={styles.favoriteListText}>
                    {FAVORITE_LIST_TEXT}
                </Text>
            </View>
            <FavoriteList containerStyle={styles.favoriteListContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 0.6,
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    profileHeaderContainer: {
        flex: 0.8,
        marginBottom: '5%'
    },
    achievementsContainer: {
        flex: 0.2,
        backgroundColor: '#041C32',
        marginTop: '5%',
        marginBottom: '5%'
    },
    favoriteListContainer: {
        flex: 0.35,
        marginTop: '2.5%',
        marginBottom: '5%'
    },
    favoriteListText: {
        marginTop: '2.5%',
        color: 'white'
    }
});