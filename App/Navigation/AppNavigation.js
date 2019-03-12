import { createStackNavigator, createAppContainer } from 'react-navigation'
import Select from '../Containers/Select'
import InfoScreen from '../Containers/InfoScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Select: { screen: Select },
  InfoScreen: { screen: InfoScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Select',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
