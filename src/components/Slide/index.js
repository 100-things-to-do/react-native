import React from 'react'
import { View, Image, Pressable } from 'react-native'
import styles from './style'
import ASSET_URL from "../../config";
import {useNavigation} from "@react-navigation/native";

export default function CarouselSlide({ cards }) {
  const navigation = useNavigation();

  return (
    <View style={styles.slide}>
      {cards.map((card, index) => {
        if (index % 2 == 0) {
          return(
          <Pressable key={index} onPress={() => navigation.navigate('Topics')} style={styles.temp}>
          <Image source={{ uri: ASSET_URL + card.image }} style={styles.leftImageCard} key={index} />
          </Pressable>
          )
        } else {
          return(
              <Pressable key={index} onPress={() => navigation.navigate('Topics')} style={styles.temp}>
                <Image source={{ uri: ASSET_URL + card.image }} style={styles.rightImageCard} key={index} />
              </Pressable>
          )
          return
        }
      })}
    </View>
  )

}
