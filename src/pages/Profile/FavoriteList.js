import { StyleSheet, Text, View, Animated, Button, Image, ScrollView } from 'react-native';

import Carousel from '../../components/Carousel'
import Border from '../../components/Border'

export default function FavoriteList({ containerStyle }) {
    return (<View style={containerStyle}>
        <Carousel />
        <View style={{
            marginLeft: '10%',
            marginRight: '10%'
        }}>
            <Border noMargin color={'white'} />
        </View>
    </View>);
}