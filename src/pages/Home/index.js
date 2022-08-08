import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Carousel from '../../components/Carousel'
import HomeHeader from './HomeHeader'
import PopularChallenges from './PopularChallenges'
import MostFamousCategory from './MostFamousCategory'
import Border from '../../components/Border'
import { globalStyles } from '../../styles/global'
const BannerWidth = Dimensions.get('window').width;


export default function Home({ navigation }) {
    return (
        <View style={globalStyles.mainContainer}>
            <View style={styles.pageContainer}>
                <HomeHeader containerStyle={styles.homeHeaderContainer} />
                <Border noMargin color={'white'} />
                <MostFamousCategory containerStyle={styles.mostFamousCategoryContainer} />
                <Border noMargin color={'white'} />
            </View>
            <PopularChallenges containerStyle={styles.popularChallengesContainer} />

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
    popularChallengesContainer: {
        flex: 0.4,
    },
    homeHeaderContainer: {
        flex: 1,
    },
    mostFamousCategoryContainer: {
        flex: 0.4,
        marginTop: '2.5%',
        marginBottom: '2.5%',
        marginRight: '5%',
        marginLeft: '5%',
    },
});
