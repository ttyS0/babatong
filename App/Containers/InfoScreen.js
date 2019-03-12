import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Toolbar from '../Components/Toolbar';
import InfoBoard from '../Components/InfoBoard';

import I18n from '../I18n'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import BabatongActions from '../Redux/BabatongRedux'

// Styles
import styles from './Styles/InfoScreenStyle'
import { Colors } from '../Themes';
import InfoLine from '../Components/InfoLine';

class InfoScreen extends Component {
  constructor(props) {
    super(props)
    this.props.update(this.props.navigation.state.params.line, false)
  }
  state = {
    direction: 0,
    timer: setInterval(() => {
      console.log(this.props.navigation.state.params.line)
      this.props.update(this.props.navigation.state.params.line, true)
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          navIconName={"arrow-back"}
          onIconClicked={() => this.props.navigation.pop()}
          title={`${this.props.navigation.state.params.line}`}
          actions={[{ title: I18n.t("info.reverse"), iconName: "import-export", iconColor: Colors.text, iconSize: 20, show: "always" }]}
          onActionSelected={() => { this.setState({ direction: this.state.direction == 0 ? 1 : 0 }) } }
        />
        {
          this.props.loading && <Text style={styles.loading}>{I18n.t("loading")}</Text>
        }
        {
          (this.props.error == null && this.props.loading === false) && (
          <InfoBoard
            line={this.props.navigation.state.params.line}
            start={this.props.stations[this.state.direction][0].name}
            end={this.props.stations[this.state.direction][0].to}
            estimatedInterval={this.props.departure[this.state.direction].estimatedInterval}
            currentLaunchedBus={this.props.departure[this.state.direction].launched.name}
            currentLaunchedTime={this.props.departure[this.state.direction].launched.time}
          />
          )
        }
        {
          (this.props.error == null && this.props.loading === false) && (
          <ScrollView contentContainerStyle={styles.scroll}>
            <InfoLine
              stations={this.props.stations[this.state.direction]}
              gps={this.props.gps[this.state.direction]}
              pending={this.props.departure[this.state.direction].launched.name}
            />
          </ScrollView>
          )
        }
        {
          this.props.error && (<Text style={styles.error}>{this.props.error}</Text>)
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.babatong.fetching,
    departure: state.babatong.departure,
    stations: state.babatong.stations,
    gps: state.babatong.gps,
    error: state.babatong.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (line, keep) => dispatch(BabatongActions.babatongRequest(line, keep))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)
