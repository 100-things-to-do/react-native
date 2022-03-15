import React from 'react'
import { View, Image } from 'react-native'
import styles from './style'

export default function CarouselSlide({ cards }) {
  return (
    <View style={styles.slide}>
      {cards.map((card, index) => {
        return <Image source={{ uri: card.url }} style={styles.imageCard} key={index} />
      })}
    </View>
  )

}