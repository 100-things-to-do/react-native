import { StyleSheet, Text, View, Animated, Button, Image, Dimensions } from 'react-native';
import Carousel from '../components/Carousel'
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 100;
const images = [
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png"
];


function Achievements() {
    function getAchievements() {
        return [{
            achievementName: 'achievement',
            isAchieved: true,
            achievementImg: 'https://reactjs.org/logo-og.png'
        }]
    }
    return (
        <View>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
        </View>
    )
}

export default function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.pageContainer}>
                <View style={styles.topImageContainer}>
                    <Image source={{ uri: images[0] }} style={styles.topImage} />
                </View>
                <Text style={styles.centeredText}>
                    Challange yourself with {"\n"} Activify
                </Text>

                <View style={styles.midImageContainer}>
                    <Image source={{ uri: images[0] }} style={styles.topImage} />
                </View>
                <Text>
                    Popular Challanges
                </Text>
            </View>

            <View style={styles.carouselContainer}>
                <Carousel />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 0.6,
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: 'blue',
    },
    topImageContainer: {
        flex: 0.6,
    },
    topImage: {
        width: '100%',
        height: '100%',
    },
    midImageContainer: {
        flex: 0.4,
        marginRight: '5%',
        marginLeft: '5%',
    },
    centeredText: {
        textAlign: 'center'
    },
    carouselContainer: {
        flex: 0.3,
    }
});