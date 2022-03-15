import { StyleSheet, Dimensions } from 'react-native'
import { imageHeight, imageWidth, cardPadding } from '../Carousel/config'
const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
    width: screenWidth,
  },
  leftImageCard: {
    flex: 0.5,
    width: null,
    height: null,
    resizeMode: 'stretch',

    marginLeft: '10%',
    marginRight: '2.5%'
  },
  rightImageCard: {
    flex: 0.5,
    width: null,
    height: null,
    resizeMode: 'stretch',
    marginRight: '10%',
    marginLeft: '2.5%'
  }
});

export default styles