import { StyleSheet, Text, View, Animated, Button, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 100;
const images = [
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png",
    "https://reactjs.org/logo-og.png"
];

export default function HomePage({ navigation }) {
    function renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    return (
        <View>
            <Button
                onPress={() => { navigation.navigate('CategoriesPage'); }}
                title="CategoriesPage"
            />
            <Button
                onPress={() => { navigation.navigate('ProfilePage'); }}
                title="ProfilePage"
            />
            <View>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    useNativeDriver={false}
                >
                    {images.map((image, index) => renderPage(image, index))}
                </Carousel>
            </View>
        </View>
    )
}