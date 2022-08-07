import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import Border from '../../components/Border';
import { globalStyles } from '../../styles/global'

const SQUARE_MARGIN = Dimensions.get('window').width / 25
const SQUARE_SIDE_LENGTH = 8 * Dimensions.get('window').width / 22
const SQUARE_BORDER_COLOR = "red"
const ACTIVITY_TEXT_COLOR = 'white'
const numColumns = 2;
const BACKGROUND_COLOR = "#7CA1B4"
import categoryAPI from "../../apis/CategoryAPI";
import useStable from "react-native-web/dist/modules/useStable";


const { data } = require('../../mock/categoriesData')



const renderActivity = ({ item: activity, index }) => {
    return (
        <View>
            <View style={styles.square}>
                <Text style={styles.text}>{activity.name}</Text>
            </View>
            <Text style={styles.activityProgress}>{activity.progress}</Text>

        </View>
    )
}

const renderCategory = ({ item: category, index }) => {
    return (
        <View style={styles.categoryContainer}>
            <Border />
            <Text style={styles.categoryTitleText}>{category.name}</Text>
            <FlatList
                data={category.activities}
                renderItem={renderActivity}
                numColumns={numColumns}
            />

        </View>
    );
};
export default function Categories() {
    const [categories, setCategories] = useState([]);
    let topicId = '62712c20530b887f5b85ae29'

    const getCategoriesCb = (resultBoolean, categoriesResult) => {
        if (resultBoolean) {
            setCategories(categoriesResult);
        }
    }

    useEffect(() => {
        categoryAPI.getCategories(topicId, getCategoriesCb)
    }, [])

    return (
        <View style={globalStyles.mainContainer}>
            <FlatList style={styles.mainFlatListContainer}
                data={categories}
                renderItem={renderCategory}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainFlatListContainer: {
        margin: '5%'
    },
    square: {
        borderColor: SQUARE_BORDER_COLOR,
        borderWidth: 1,
        width: SQUARE_SIDE_LENGTH,
        height: SQUARE_SIDE_LENGTH,
        marginLeft: SQUARE_MARGIN,
        marginRight: SQUARE_MARGIN,
        marginTop: SQUARE_MARGIN,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'black'
    },
    text: {
        color: ACTIVITY_TEXT_COLOR,
        fontSize: 18,
        fontWeight: "bold",
    },
    categoryContainer: {
        marginBottom: '5%',
    },
    categoryTitleText: {
        marginTop: '2.5%',
        marginLeft: '5%'
    },
    activityProgress: {
        marginLeft: '10%'
    }
});
