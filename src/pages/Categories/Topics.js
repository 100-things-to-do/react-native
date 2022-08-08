import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions, Pressable, Image } from "react-native";
import Border from '../../components/Border';
import { globalStyles } from '../../styles/global'

const SQUARE_MARGIN = Dimensions.get('window').width / 25
const SQUARE_SIDE_LENGTH = 8 * Dimensions.get('window').width / 22
const SQUARE_BORDER_COLOR = "red"
const ACTIVITY_TEXT_COLOR = 'white'
const numColumns = 2;
const BACKGROUND_COLOR = "#7CA1B4"
import topicAPI from "../../apis/TopicAPI";
const { data } = require('../../mock/categoriesData')
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ASSET_URL from "../../../src/config";


const Category = ({category, topicId}) => {
    const navigation = useNavigation();

    console.log("category", category)
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Activities', {topicId: topicId, category: category})}>
                <View style={styles.square}>
                    <Image
                        style={{height: SQUARE_SIDE_LENGTH, width: SQUARE_SIDE_LENGTH}}
                        source={{ uri: ASSET_URL + category.image}}
                        resizeMode="cover"
                    />

                </View>
            </Pressable>
            <Text style={styles.activityProgress}>1/10</Text>

        </View>
    )
}

const renderCategory = ({ item: category, index }, topicId) => {
    return (
        <Category category={category} topicId={topicId}/>
    )
}



const renderTopic = ({ item: topic, index }) => {
    return (
        <View style={styles.categoryContainer}>
            <Border />
            <Text style={styles.categoryTitleText}>{topic.name}</Text>
            <FlatList
                topicId={topic._id}
                data={topic.categories}
                renderItem={(item) => renderCategory(item, topic._id)}
                numColumns={numColumns}
            />

        </View>
    );
};
export default function Topics() {
    const [topics, setTopics] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        refreshTopics()
    }, []);

    useEffect(() => {

    }, [isFocused]);

    const getTopicsCb = (isSuccess,topicsResult) => {
        if (isSuccess) {
            console.log("topics", topicsResult);
            setTopics(topicsResult);
        }
    }

    const refreshTopics = () => {
        topicAPI.getTopics(getTopicsCb);
    }



    return (
        <View style={globalStyles.mainContainer}>
            <FlatList style={styles.mainFlatListContainer}
                data={topics}
                renderItem={renderTopic}
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
