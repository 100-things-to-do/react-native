import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions, TouchableHighlight, Image } from "react-native";
import { globalStyles } from '../../styles/global'
import ActivityAPI from "../../apis/ActivityAPI";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {ASSET_URL} from "../../../src/config";
import {useTranslation} from "react-i18next";
import * as SecureStore from "expo-secure-store";

const SQUARE_MARGIN = Dimensions.get('window').width / 200
const SQUARE_SIDE_LENGTH = 4 * Dimensions.get('window').width / 23
const WHITE = "#fff"
const numColumns = 5;
const BLACK = 'black';
const FEELING_LUCKY_BUTTON_COLOR = '#685269'
const FEELING_LUCKY_BUTTON_BORDER_COLOR = '#ED44F5'
const { data } = require("../../mock/categoryData");



function Activity({ activity, topicId, categoryId }){
    const navigation = useNavigation();

    const revealedActivityClicked = () => {
        navigation.navigate("RevealedActivity", {activity: activity})
    }

    const unrevealedActivityClicked = async () => {
        let deviceId = await SecureStore.getItemAsync('secure_deviceid');
        await ActivityAPI.revealActivity(deviceId, topicId, categoryId, activity._id)
        navigation.navigate("RevealedActivity", {activity: activity})
    }



    return (
        <TouchableHighlight
            onPress={async () => { activity.isRevealed ? revealedActivityClicked() : await unrevealedActivityClicked() }}
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
    const {t, i18n} = useTranslation();
    const navigation = useNavigation();
    const {topicId, category} = route.params;
    const [activities, setActivities] = useState([]);
    const [revealedCategoryCount, setRevealedCategoryCount] = useState(0);
    const isFocused = useIsFocused();
    //console.log(category)

    useEffect(async () => {
        await refreshData();
    }, [])

    useEffect(async () => {
        await refreshData();
    }, [isFocused])

    useEffect(() => {
        setRevealedCategoryCount(activities.filter(activity => activity.isRevealed).length);
    }, [activities])


    const refreshData = async () => {
        let deviceId = await SecureStore.getItemAsync('secure_deviceid');
        ActivityAPI.getActivities(deviceId, topicId, category._id, (isSuccess, activities) => {
            if(isSuccess){
                setActivities(activities)
            }else{
                console.log(activities);
            }
        })
    }

    const getRandomUnrevealedActivity = () => {
        const unrevealedActivities  = activities.filter(activity => !activity.isRevealed);
        const randomIndex = Math.floor(Math.random() * unrevealedActivities.length);
        return unrevealedActivities[randomIndex];
    }

    const revealRandomActivity = async () => {
        let deviceId = await SecureStore.getItemAsync('secure_deviceid');
        const activity = getRandomUnrevealedActivity();
        await ActivityAPI.revealActivity(deviceId, topicId, category._id, activity._id);
        navigation.navigate("RevealedActivity", {activity: activity})
    }

    return (
        <View style={globalStyles.mainContainer}>
            <View style={styles.categorySummaryContainer}>
                <Text style={styles.categoryTitleText}>
                    {category.name}
                </Text>
                <Text style={styles.categoryProgressText}>
                    {`${revealedCategoryCount}/${activities.length}`}
                </Text>
            </View>
            <FlatList style={styles.flatListContainer}
                data={activities}
                renderItem={(renderObj) => <Activity activity={renderObj.item} topicId={topicId} categoryId={category._id}/>}
                numColumns={numColumns}
            />
            {activities.length - revealedCategoryCount > 0 ?
                <View style={styles.feelingLuckyContainer}>
                    <TouchableHighlight
                        style={styles.feelingLuckyButton}
                        onPress={() => revealRandomActivity()}
                        underlayColor='#fff'>
                        <Text style={styles.feelingLuckyText}>{t('iAmFeelingLucky')}</Text>
                    </TouchableHighlight>
                </View> : <></>
            }

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
