import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import React, { useRef, useEffect } from 'react';

export default function Curtain() {

    return (
        <View style={styles.row}>
            <View style={{ flexDirection: 'column', }}>
                <View style={styles.leftCurtain}></View>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <View style={styles.rightCurtain}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    leftCurtain: {
        backgroundColor: 'blue',
        flexDirection: 'column',
        height: 100,
        width: 100,
        margin: 10,
        marginRight: -25,
        opacity: 0.2
    },
    rightCurtain: {
        backgroundColor: 'red',
        flexDirection: 'column',
        height: 100,
        width: 100,
        margin: 10,
        marginLeft: -25,
        opacity: 0.2
    }
});
