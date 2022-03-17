import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions, TouchableHighlight } from "react-native";

const SQUARE_MARGIN = Dimensions.get('window').width / 200
const SQUARE_SIDE_LENGTH = 4 * Dimensions.get('window').width / 23
const WHITE = "#fff"
const numColumns = 5;
const BLACK = 'black';
const FEELING_LUCKY_BUTTON_COLOR = '#685269'
const FEELING_LUCKY_BUTTON_BORDER_COLOR = '#ED44F5'

const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
];



const renderSquares = ({ item, index }) => {
    return (
        <TouchableHighlight
            onPress={() => { console.log('hi') }}
            underlayColor='#fff'
            style={styles.square}>
            <Text>a</Text>
        </TouchableHighlight>
    );
};
export default function CategoryPage() {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.categorySummaryContainer}>
                <Text style={styles.categoryTitleText}>
                    Couple Home
                </Text>
                <Text style={styles.categoryProgressText}>
                    5/10
                </Text>
            </View>
            <FlatList style={styles.flatListContainer}
                data={data}
                renderItem={renderSquares}
                numColumns={numColumns}
            />
            <View style={styles.feelingLuckyContainer}>
                <TouchableHighlight
                    style={styles.feelingLuckyButton}
                    onPress={() => { console.log('hi') }}
                    underlayColor='#fff'>
                    <Text style={styles.feelingLuckyText}>I am feeling lucky!</Text>
                </TouchableHighlight>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    flatListContainer: {
        flex: 0.4,
        margin: '5%'
    },
    square: {
        borderColor: WHITE,
        borderWidth: 1,
        width: SQUARE_SIDE_LENGTH,
        height: SQUARE_SIDE_LENGTH,
        margin: SQUARE_MARGIN,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: BLACK
    },
    text: {
        color: WHITE,
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryTitleText: {
        marginTop: '2%',
        fontSize: 30,
        color: WHITE
    },
    categoryProgressText: {
        margin: '5%',
        color: WHITE
    },
    categorySummaryContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%'
    },
    feelingLuckyContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    feelingLuckyButton: {
        backgroundColor: FEELING_LUCKY_BUTTON_COLOR,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: FEELING_LUCKY_BUTTON_BORDER_COLOR,
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    feelingLuckyText: {
        color: WHITE

    }
});