import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";

const MARGIN = Dimensions.get('window').width / 20
const SQUARE_SIDE_LENGTH = 8 * Dimensions.get('window').width / 20

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

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: false });
        numberOfElementsLastRow++;
    }

    return data;
};
const numColumns = 2;


export default function CategoriesPage() {
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

    return (
        <FlatList style={styles.container}
            data={data}
            renderItem={renderSquares}
        />


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7CA1B4",
    },
    flat: {
        backgroundColor: 'red'
    },
    square: {
        borderColor: "#fff",
        borderWidth: 1,
        width: SQUARE_SIDE_LENGTH,
        height: SQUARE_SIDE_LENGTH,
        margin: MARGIN,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryContainer: {
        marginBottom: '5%',
    }
});