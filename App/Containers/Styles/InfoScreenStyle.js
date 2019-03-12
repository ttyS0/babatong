import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loading: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.light
  },
  error: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.error
  },
  scroll: {
    padding: 10,
  }
})
