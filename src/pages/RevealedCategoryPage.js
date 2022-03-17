import React from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from "react-native";


const WHITE = "#fff"
const BLACK = 'black';
const GO_NEXT_BUTTON_COLOR = '#685269'
const GO_NEXT_BUTTON_BORDER_COLOR = '#ED44F5'
const categoryTitle = 'Couple Home';
const categoryProgress = '5 / 10';
const CURTAIN_JPEG = require('../../assets/video2-white.png')
const buttonText = 'Yeni bir macera için tıkla';
const achievementAcquiredText = 'Achievement Acquired!'
const REVEALED_ITEM_BG_COLOR = 'purple'

const { achievementData } = require('../mock/achievementData');


function CategoryTitle() {
    return (
        <View style={styles.categoryTitleContainer}>
            <Text style={categoryTitleStyles.categoryTitleText}>
                {categoryTitle}
            </Text>
            <Text style={categoryTitleStyles.categoryProgressText}>
                {categoryProgress}
            </Text>
        </View>
    )
}

function AdButton() {
    return (
        <View style={styles.adButtonContainer}>
            <TouchableOpacity style={adButtonStyles.adButton} activeOpacity={0.5}>
                <Image
                    source={CURTAIN_JPEG}
                    style={adButtonStyles.adButtonImage}
                />
                <Text style={adButtonStyles.adButtonTextStyle}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}




function RevealedActivity() {
    return (<View style={styles.revealedActivityContainer}>
        <View style={revealedActivityStyles.square}>
        </View>
    </View>);
}



function AchievementAcquired() {
    return (<View style={achievementStyles.achievementContainer}>
        <Text style={achievementStyles.achievementText}>{achievementAcquiredText}</Text>
        <Image source={{
            uri: achievementData.imgUrl
        }} style={achievementStyles.achievementImage} />
        <Text style={achievementStyles.achievementText}>{achievementData.name}</Text>
    </View>);
}


export default function CategoryPage() {
    return (
        <View style={styles.mainContainer}>
            <CategoryTitle />
            <RevealedActivity></RevealedActivity>
            <AchievementAcquired></AchievementAcquired>
            <AdButton />
        </View>
    );
}


const categoryTitleStyles = StyleSheet.create({

    categoryTitleText: {
        marginTop: '2%',
        fontSize: 30,
        color: WHITE
    },
    categoryProgressText: {
        margin: '5%',
        color: WHITE
    },
})

const achievementStyles = StyleSheet.create({
    achievementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    achievementImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
    achievementText: {
        color: '#fff',
        marginRight: '2.5%',
    },
})

const adButtonStyles = StyleSheet.create({

    adButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GO_NEXT_BUTTON_COLOR,
        borderWidth: 1,
        borderColor: GO_NEXT_BUTTON_BORDER_COLOR,
        height: 40,
        borderRadius: 10,
        margin: 5,
    },
    adButtonImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
    adButtonTextStyle: {
        color: '#fff',
        marginRight: '2.5%',
    },
})

const revealedActivityStyles = StyleSheet.create({
    square: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: REVEALED_ITEM_BG_COLOR
    },
})
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    categoryTitleContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BLACK,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%'
    },
    adButtonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%',
    },
    revealedActivityContainer: {
        flex: 0.5,
        margin: '5%',
    },
});