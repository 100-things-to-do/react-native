import { StyleSheet } from 'react-native'
import { imageHeight } from './config'

const styles = StyleSheet.create({
  container: {
    flex: 2,

    backgroundColor: '#FFFFFF',
  },
  scrollViewContainerStyle: {
    justifyContent: 'center',
    height: null
  },
  cardCountContainer: {
    paddingBottom: 20
  },
  countText: {
    fontSize: 26
  }
});

export default styles