import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  station: {
    margin: 0,
    marginTop: -1
  },
  wayBus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parkingWayBus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  wayStation: {
    marginTop: -2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  parkingBranch: {
    margin: 0,
    height: 30,
    width: 10,
    marginLeft: 15,
    backgroundColor: Colors.light,
  },
  branch: {
    margin: 0,
    height: 30,
    width: 10,
    marginTop: -1,
    marginLeft: 15,
    backgroundColor: Colors.dark,
  },
  parkingActiveBranch: {
    margin: 0,
    height: 30,
    width: 10,
    marginTop: -1,
    marginLeft: 15,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
  },
  parkingActiveBranchDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.dark
  },
  activeBranch: {
    margin: 0,
    height: 30,
    width: 10,
    marginTop: -1,
    marginLeft: 15,
    backgroundColor: Colors.dark,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeBranchDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.light
  },
  dot: {
    borderWidth: 5,
    borderRadius: 20,
    borderColor: Colors.dark,
    backgroundColor: Colors.text,
    width: 40,
    height: 40,
  },
  parking: {
    marginLeft: 10,
    color: Colors.accent
  },
  busPendingLabel: {
    marginLeft: 10,
    color: Colors.accent
  },
  parkingLabel: {
    marginLeft: 10,
    color: Colors.primary,
  },
  busLabel: {
    marginLeft: 10,
    color: Colors.dark
  },
  stationLabel: {
    marginLeft: 10,
    color: Colors.primaryText
  }
})
