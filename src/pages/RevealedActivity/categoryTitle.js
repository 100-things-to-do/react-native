import { StyleSheet, View, Text } from "react-native";

const categoryTitle = 'Couple Home';
const categoryProgress = '5 / 10';
const CATEGORY_COLOR = "#fff"

export default function CategoryTitle({ containerStyle, activityName }) {
    return (
        <View style={containerStyle}>
            <Text style={categoryTitleStyles.categoryTitleText}>
                {activityName}
            </Text>
        </View>
    )
}

const categoryTitleStyles = StyleSheet.create({

    categoryTitleText: {
        marginTop: '2%',
        fontSize: 30,
        color: CATEGORY_COLOR
    },
    categoryProgressText: {
        margin: '5%',
        color: CATEGORY_COLOR
    },
})

