import React from 'react'
import { View, Image } from 'react-native'
import styles from './style'

export default function CarouselSlide({ cards }) {
  return (
    <View style={styles.slide}>
      {cards.map((card, index) => {
        if (index % 2 == 0) {
          return <Image source={{ uri: card.url }} style={styles.leftImageCard} key={index} />
        } else {
          return <Image source={{ uri: card.url }} style={styles.rightImageCard} key={index} />
        }
      })}
    </View>
  )

}