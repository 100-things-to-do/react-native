import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import style from "../components/Curtain/style";



const data = [
    { key: 'A' }, { key: 'B' }, { key: 'C' }
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
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View style={styles.square}>
                <Text style={styles.text}>{item.key}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={formatData(data, numColumns)}
                renderItem={renderSquares}
                numColumns={numColumns}
            />
            <FlatList
                data={formatData(data, numColumns)}
                renderItem={renderSquares}
                numColumns={numColumns}
            />
        </View>
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
        width: '45%',
        margin: '2.5%', // 5 + 5 = 10
        height: '100%',
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});