import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Border from '../../components/Border'
import Carousel from '../../components/Carousel'

const POPULAR_CHALLENGES_TEXT = 'Popular Challenges'

export default function PopularChallenges({ containerStyle }) {
    return (
        <View style={containerStyle}>
            <Text style={styles.popularChallangesText}>
                {POPULAR_CHALLENGES_TEXT}
            </Text>
            <View style={styles.carouselContainer}>
                <Carousel />
            </View>
            <View style={{
                marginLeft: '10%',
                marginRight: '10%'
            }}>
                <Border noMargin color={'white'} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 0.8,
    },
    popularChallangesText: {
        marginLeft: '10%',
        marginTop: '2.5%',
        marginBottom: '1%',
        color: 'white',
        fontWeight: 'bold'
    }
})