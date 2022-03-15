import { StyleSheet } from 'react-native'
import { imageHeight } from './config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  cardCountContainer: {
    paddingBottom: 20
  },
  countText: {
    fontSize: 26
  }
});

export default styles