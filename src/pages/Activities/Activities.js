import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions, TouchableHighlight, Image } from "react-native";
import { globalStyles } from '../../styles/global'
import ActivityAPI from "../../apis/ActivityAPI";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import ASSET_URL from "../../../src/config";

const SQUARE_MARGIN = Dimensions.get('window').width / 200
const SQUARE_SIDE_LENGTH = 4 * Dimensions.get('window').width / 23
const WHITE = "#fff"
const numColumns = 5;
const BLACK = 'black';
const FEELING_LUCKY_BUTTON_COLOR = '#685269'
const FEELING_LUCKY_BUTTON_BORDER_COLOR = '#ED44F5'
const { data } = require("../../mock/categoryData");



function Activity({ activity}){
    const navigation = useNavigation();

    return (
        <TouchableHighlight
            onPress={() => { activity.isRevealed ? navigation.navigate("RevealedActivity", {activity: activity}) : navigation.navigate("RevealedActivity", {activity: activity}) }}
            underlayColor='#fff'
            style={styles.square}>
            {activity.isRevealed ?
                <Image
                    style={{height: SQUARE_SIDE_LENGTH, width: SQUARE_SIDE_LENGTH}}
                    source={{ uri: ASSET_URL + activity.image}}
                    resizeMode="cover"
                /> : <></>
            }

        </TouchableHighlight>
    );
};
export default function Activities({route}) {
    const {topicId, category} = route.params;
    const [activities, setActivities] = useState([]);
    const isFocused = useIsFocused();
    //console.log(category)

    const refreshData = () => {
        ActivityAPI.getActivities(topicId, category._id, getActivitiesCb)
    }

    useEffect(() => {
        refreshData();
    }, [])

    useEffect(() => {
        refreshData();
    }, [isFocused])

    const getActivitiesCb = (isSuccess, activities) => {
        console.log(isSuccess)
        if(isSuccess){
            console.log("activities", activities);
            setActivities(activities)
        }else{
            console.log(activities);
        }
    }
    return (
        <View style={globalStyles.mainContainer}>
            <View style={styles.categorySummaryContainer}>
                <Text style={styles.categoryTitleText}>
                    {category.name}
                </Text>
                <Text style={styles.categoryProgressText}>
                    5/10
                </Text>
            </View>
            <FlatList style={styles.flatListContainer}
                data={activities}
                renderItem={(renderObj) => <Activity activity={renderObj.item}/>}
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
