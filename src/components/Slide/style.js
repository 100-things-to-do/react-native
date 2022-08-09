import { StyleSheet, Dimensions } from 'react-native'
const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
    width: screenWidth,
    alignContent: "center"
  },
  temp: {
    flex: 0.45,
    height: 300,
    width: 250
  },
  leftImageCard: {
    flex: 0.5,
    width: null,
    height: null,
    resizeMode: 'stretch',
    marginLeft: '10%',
    marginRight: '2.5%',
    marginBottom: '5%'
  },
  rightImageCard: {
    flex: 0.5,
    width: null,
    height: null,
    resizeMode: 'stretch',
    marginRight: '10%',
    marginLeft: '2.5%',
    marginBottom: '5%'
  }
});

export default styles
