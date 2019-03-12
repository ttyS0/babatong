import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, ART, Shape } from 'react-native'
import styles from './Styles/InfoBoardStyle'

import I18n from '../I18n'
const { Path } = ART;

var path = new Path();
path.lineTo(100, 0);
path.close();

export default class InfoBoard extends Component {
  // // Prop type warnings
  static propTypes = {
    line: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    // plannedInterval: PropTypes.number,
    estimatedInterval: PropTypes.string,
    currentLaunchedBus: PropTypes.string,
    currentLaunchedTime: PropTypes.string,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.board}>
        <Text style={styles.title}>{this.props.line}</Text>
        <View style={styles.direction}>
          <Text style={styles.directionName}>{this.props.start}</Text>
          <Text style={styles.directionArrow}> → </Text>
          <Text style={styles.directionName}>{this.props.end}</Text>
        </View>
        <View style={styles.interval}>
          <Text style={styles.intervalItem}>{I18n.t("info.interval")}: {this.props.estimatedInterval} {I18n.t("unit.minute")}</Text>
        </View>
        {this.props.currentLaunchedBus.length > 0 &&
        (<View style={styles.launched}>
          <Text style={styles.launchedBus}>{I18n.t("info.pending")}: {this.props.currentLaunchedBus} {this.props.currentLaunchedTime}</Text>
        </View>)}
      </View>
    )
  }
}
