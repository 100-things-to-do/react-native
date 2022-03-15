import { StyleSheet, Text, View, Animated, Button, Image, ImageBackground } from 'react-native';
import React, { useRef, useEffect } from 'react';

const TOTAL_WIDTH = 150;
const INIT_CURTAIN_WIDTH = 100;
const CURTAIN_OPEN_LENGTH = 80;
const CURTAIN_HEIGHT = 100;
const CURTAIN_JPEG = require('../../assets/curtain.jpeg')
const FRAME_MARGIN = 10;

export default function Curtain({ imagePath, text }) {
    const curtainWidth = useRef(new Animated.Value(INIT_CURTAIN_WIDTH)).current;
    const image = { uri: "https://reactjs.org/logo-og.png" };

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
    };

    return (
        <ImageBackground style={styles.image} source={image}>
            <View style={styles.row} onStartShouldSetResponder={() => buttonPressed()}>

                <Animated.View style={{ ...styles.leftCurtain, width: curtainWidth }}>
                    <Image source={CURTAIN_JPEG} style={{ width: null, height: CURTAIN_HEIGHT }} />
                </Animated.View>
                <Animated.View style={{ ...styles.rightCurtain, width: curtainWidth }} >
                    <Image source={CURTAIN_JPEG} style={{ width: null, height: CURTAIN_HEIGHT }} />
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
