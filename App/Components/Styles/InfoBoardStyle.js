import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  board: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.dark
  },
  title: {
    fontSize: 40,
    color: Colors.text
  },
  direction: {
    flexDirection: 'row',
    fontSize: 16,
    color: Colors.light
  },
  directionName: {
    fontSize: 16,
    color: Colors.light
  },
  directionArrow: {
    fontSize: 16,
    color: Colors.text
  },
  interval: {
    flexDirection: 'row',
  },
  intervalItem: {
    fontSize: 16,
    color: Colors.text
  },
  launched: {
    
  },
  launchedBus: {
    color: Colors.accent
  }
})
