import { StyleSheet } from 'react-native';

const TOTAL_WIDTH = 150;
const FRAME_MARGIN = 10;

export default styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: TOTAL_WIDTH,
    },
    leftCurtain: {

    },
    rightCurtain: {
        marginLeft: 'auto'
    },
    image: {
        margin: FRAME_MARGIN
    }
});