import React from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import CategoryTitle from './categoryTitle';
import RevealedActivity from './revealedActivity';
import AchievementAcquired from './achievementAcquired';
import AdButton from './adButton';

const CONTAINER_BG_COLOR = 'black';


export default function RevealedActivity() {
    return (
        <View style={styles.mainContainer}>
            <CategoryTitle containerStyle={styles.categoryTitleContainer} />
            <RevealedActivityPicture containerStyle={styles.revealedActivityContainer} />
            <AchievementAcquired containerStyle={styles.achievementContainer} />
            <AdButton containerStyle={styles.adButtonContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: CONTAINER_BG_COLOR
    },
    categoryTitleContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%'
    },
    revealedActivityContainer: {
        flex: 0.5,
        margin: '5%',
    },
    achievementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    adButtonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%',
    },

});
