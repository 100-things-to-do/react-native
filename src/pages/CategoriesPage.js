import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";

const SQUARE_MARGIN = Dimensions.get('window').width / 20
const SQUARE_SIDE_LENGTH = 8 * Dimensions.get('window').width / 20
const SQUARE_BORDER_COLOR = "#fff"
const numColumns = 2;
const BACKGROUND_COLOR = "#7CA1B4"
const CATEGORY_MARGIN_BOTTOM = '5%'

const data = [
    {
        name: 'Cars',
        letters: ['A', 'B', 'C']
    },
    {
        name: 'Homes',
        letters: ['D', 'E', 'F']
    },
    {
        name: 'Guns',
        letters: ['H', 'I', 'J']
    }
];



const renderSquares = ({ item, index }) => {
    return (
        <View style={styles.categoryContainer}>
            <Text>{item.name}</Text>
            <FlatList
                data={item.letters}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.square}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )
                }}
                numColumns={numColumns}
            />
        </View>
    );
};
export default function CategoriesPage() {


    return (
        <FlatList style={styles.container}
            data={data}
            renderItem={renderSquares}
        />


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
    },
    square: {
        borderColor: SQUARE_BORDER_COLOR,
        borderWidth: 1,
        width: SQUARE_SIDE_LENGTH,
        height: SQUARE_SIDE_LENGTH,
        margin: SQUARE_MARGIN,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        color: SQUARE_BORDER_COLOR,
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryContainer: {
        marginBottom: CATEGORY_MARGIN_BOTTOM,
    }
});