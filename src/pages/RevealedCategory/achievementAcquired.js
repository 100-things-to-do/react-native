import { StyleSheet, View, Text, Image } from "react-native";

const { achievementData } = require('../../mock/achievementData');
const achievementAcquiredText = 'Achievement Acquired!'

export default function AchievementAcquired({ containerStyle }) {
    return (<View style={containerStyle}>
        <Text style={achievementStyles.achievementText}>{achievementAcquiredText}</Text>
        <Image source={{
            uri: achievementData.imgUrl
        }} style={achievementStyles.achievementImage} />
        <Text style={achievementStyles.achievementText}>{achievementData.name}</Text>
    </View>);
}

const achievementStyles = StyleSheet.create({
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