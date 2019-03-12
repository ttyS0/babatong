import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.transparent
  },
  list: {
    flex: 1,
    marginTop: 5
  },
  row: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  lineLabel: {
    fontSize: 20,
    alignSelf: 'center',
    color: Colors.dark,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: Colors.divider
  },
  listContent: {
    //flex: 1,
    //marginTop: Metrics.baseMargin
  }
})
