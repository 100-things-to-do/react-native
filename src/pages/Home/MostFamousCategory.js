import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const MOST_FAMOUS_CATEGORY_IMG = "https://reactjs.org/logo-og.png";

export default function MostFamousCategory({ containerStyle }) {
    return (<View style={containerStyle}>
        <Image source={{
            uri: MOST_FAMOUS_CATEGORY_IMG
        }} style={styles.image} />
    </View>);
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
})