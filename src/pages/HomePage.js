import { StyleSheet, Text, View, Animated, Button, Image, Dimensions } from 'react-native';
import CustomCarousel from '../components/carousel'
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 100;
const images = [
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png"
];
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

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
    function renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    return (
        <View style={styles.pageContainer}>
            <View style={styles.topImageContainer}>
                <Image source={{ uri: images[0] }} style={styles.topImage} />
            </View>
            <Text style={styles.centeredText}>
                Challange yourself with {"\n"} Activify
            </Text>



            <Text>
                Popular Challanges
            </Text>
            <View style={styles.popularChallangesContainer}>
                <Image source={{ uri: images[0] }} style={styles.popularChallangeLeftImage} />
                <Image source={{ uri: images[0] }} style={styles.popularChallangeRightImage} />

            </View>
            <CustomCarousel></CustomCarousel>
            <Button
                onPress={() => { navigation.navigate('CategoriesPage'); }}
                title="CategoriesPage"
            />
            <Button
                onPress={() => { navigation.navigate('ProfilePage'); }}
                title="ProfilePage"
            />
        </View>


    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        margin: '10%',
        backgroundColor: 'blue',
    },
    topImageContainer: {
        flex: 0.4,
        margin: 0,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    topImage: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
    },
    centeredText: {
        textAlign: 'center'
    },
    popularChallangesContainer: {
        flex: 0.2,
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    popularChallangeLeftImage: {
        flex: 0.5,
        marginRight: '5%',
    },
    popularChallangeRightImage: {
        flex: 0.5,
        marginLeft: '5%',
    },
});