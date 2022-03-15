import React, { Component, useState, useRef, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import styles from './style'
import { cardPerSlide } from './config'
import CarouselSlide from '../Slide'
import movies from './data'

const { width: screenWidth } = Dimensions.get('window')

export default function CustomCarousel() {
  const noOfSlides = Math.ceil(movies.length / cardPerSlide)
  const [totalSlide, setTotalSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const stepCarousel = useRef();
  const [refVisible, setRefVisible] = useState(false);


  // function will find out total no of slide and set to state
  const setTotalSlides = (contentWidth) => {
    // contentWidth received from onContentSizeChange
    if (contentWidth !== 0) {
      const approxSlide = contentWidth / screenWidth
      if (totalSlide !== parseInt(approxSlide)) {
        setTotalSlide(parseInt(Math.ceil(approxSlide.toFixed(2))));
        calculateNextPrev(parseInt(approxSlide), currentSlide)
      }
    }
  }


  // function will identify current slide visible on screen
  // Also maintaining current slide on carousel swipe.
  const handleScrollEnd = (e) => {
    console.log('handleScrollEnd')
    if (!e) {
      return
    }
    const { nativeEvent } = e
    if (nativeEvent && nativeEvent.contentOffset) {
      let currentSlide = 1
      if (nativeEvent.contentOffset.x === 0) {
        //setCurrentSlide(currentSlide % 5)
      } else {
        const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth
        currentSlide = parseInt(Math.ceil(approxCurrentSlide.toFixed(2)) + 1)
        //setCurrentSlide(currentSlide)
      }
      calculateNextPrev(totalSlide, currentSlide)
    }
  }

  const goToNext = () => {
    const scrollPoint = currentSlide * screenWidth
    stepCarousel.current.scrollTo({ x: scrollPoint, y: 0, animated: true })
    setCurrentSlide(prevCurrentSlide => (prevCurrentSlide + 1) % 5);
  }

  const goToPrev = () => {
    const pageToGo = currentSlide - 2
    const scrollPoint = (pageToGo) * screenWidth
    stepCarousel.current.scrollTo({ x: scrollPoint, y: 0, animated: true })
    // following condition is for android only because in android onMomentumScrollEnd doesn't
    // call when we scrollContent with scrollview reference.
    if (Platform.OS === 'android') {
      handleScrollEnd({ nativeEvent: { contentOffset: { y: 0, x: scrollPoint } } })
    }
  }


  useEffect(() => {
    console.log("currentSlide", currentSlide);

    const id = setInterval(() => goToNext(), 2000)
    return function () {
      clearInterval(id);
    }
  }, [currentSlide])

  const calculateNextPrev = (totalPage, currentPage) => {
    if (totalPage > currentPage) {
      setIsNext(true)
    }
    if (currentPage === 1) {
      setIsPrev(false)
    }
    if (currentPage === totalPage) {
      setIsNext(false)
    }
    if (currentPage > 1) {
      setIsPrev(true)
    }
  }

  return (

    <View style={styles.container}>

      <ScrollView
        ref={stepCarousel}
        contentContainerStyle={styles.scrollViewContainerStyle}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        decelerationRate={0}
        snapToAlignment={'center'}
        onContentSizeChange={setTotalSlides}
        onMomentumScrollEnd={handleScrollEnd}
        automaticallyAdjustContentInsets={false}
      >
        {[...Array(noOfSlides)].map((e, i) => {
          const startIndex = i + 1
          const startPosition = ((startIndex + (startIndex - 1)) - 1)
          const endPosition = (startIndex * 2)
          return <CarouselSlide key={i} cards={movies.slice(startPosition, endPosition)} />
        })}
      </ScrollView>
    </View>
  )

}
