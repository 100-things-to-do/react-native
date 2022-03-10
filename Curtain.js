import { StyleSheet, Text, View, Animated, Button, Image } from 'react-native';
import React, { useRef, useEffect } from 'react';

const INIT_CURTAIN_WIDTH = 100;
const INIT_PLACEHOLDER_WIDTH = 0;
const CURTAIN_OPEN_LENGTH = 60;
const CURTAIN_OVERLAP_MARGIN = -40;
const TOTAL_CURTAIN_LENGTH = (INIT_CURTAIN_WIDTH + 2 * CURTAIN_OVERLAP_MARGIN) * 2 + (2 * -CURTAIN_OVERLAP_MARGIN);
console.log(TOTAL_CURTAIN_LENGTH)
const PLACEHOLDER_MAX_WIDTH = TOTAL_CURTAIN_LENGTH > (2 * CURTAIN_OPEN_LENGTH) ? 2 * CURTAIN_OPEN_LENGTH : TOTAL_CURTAIN_LENGTH;

export default function Curtain() {
    const curtainWidth = useRef(new Animated.Value(INIT_CURTAIN_WIDTH)).current;
    const placeholderWidth = useRef(new Animated.Value(INIT_PLACEHOLDER_WIDTH)).current;

    const buttonPressed = () => {
        Animated.timing(curtainWidth, {
            toValue: INIT_CURTAIN_WIDTH - CURTAIN_OPEN_LENGTH,
            duration: 1000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                curtainWidth.setValue(INIT_CURTAIN_WIDTH);
            }
        });
        Animated.timing(placeholderWidth, {
            toValue: PLACEHOLDER_MAX_WIDTH,
            duration: 1000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                placeholderWidth.setValue(INIT_PLACEHOLDER_WIDTH);
            }
        });
    };

    return (
        <View style={styles.row} onStartShouldSetResponder={() => buttonPressed()}>
            <View style={{ flexDirection: 'column', }} >
                <Animated.View style={{ ...styles.leftCurtain, width: curtainWidth }}>
                    <Image source={require('./curtain.jpeg')} style={{ width: null, height: 100 }} />
                </Animated.View>

            </View>
            <View style={{ flexDirection: 'column' }}>
                <Animated.View style={{ width: placeholderWidth }} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Animated.View style={{ ...styles.rightCurtain, width: curtainWidth }} >
                    <Image source={require('./curtain.jpeg')} style={{ width: null, height: 100 }} />

                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    leftCurtain: {
        backgroundColor: 'blue',
        height: 100,
        marginRight: CURTAIN_OVERLAP_MARGIN,
        opacity: 0.2,
        position: 'relative',
    },
    rightCurtain: {
        backgroundColor: 'red',
        height: 100,
        marginLeft: CURTAIN_OVERLAP_MARGIN,
        opacity: 0.2,
        position: 'relative',
    }
});
