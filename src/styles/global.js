import { StyleSheet } from 'react-native';

const HEADER_BG_COLOR = '#1C658C'
const HEADER_TINT_COLOR = '#1C658C'
const HEADER_HEIGHT = 20
const globalStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C658C'
    },
});

module.exports = {
    HEADER_BG_COLOR: HEADER_BG_COLOR,
    HEADER_TINT_COLOR: HEADER_TINT_COLOR,
    HEADER_HEIGHT: HEADER_HEIGHT,
    globalStyles: globalStyles
}