import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/InfoLineStyle'

import I18n from '../I18n'

export default class InfoLine extends Component {
  // // Prop type warnings
  static propTypes = {
    stations: PropTypes.array,
    gps: PropTypes.array,
    pending: PropTypes.string
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.props.stations && this.props.stations.map((sv, sk) => (
            <View key={sk} style={styles.station}>
              <View key={"pre"} style={(sk == 0) ? styles.parkingWayBus : styles.wayBus}>
                <View style={(sk == 0) ? styles.parkingBranch : styles.branch}>
                </View>
                {
                  this.props.stations && sk == 0 && <Text style={styles.parkingLabel}>{I18n.t("info.parking")}</Text>
                }
              </View>
              {
                this.props.gps[sk] && this.props.gps[sk].map((bv, bk) => (sk == 0 ?
                <View key={`${sk}bus`} style={styles.parkingWayBus}>
                  <View style={styles.parkingActiveBranch}>
                    <View style={styles.parkingActiveBranchDot}></View>
                  </View>
                  <Text style={(this.props.pending == bv.codename) ? styles.busPendingLabel : styles.busLabel}>{bv.codename}</Text>
                </View>
                :
                <View key={`${sk}bus`} style={styles.wayBus}>
                  <View style={styles.activeBranch}>
                    <View style={styles.activeBranchDot}></View>
                  </View>
                  <Text style={(this.props.pending == bv.codename) ? styles.busPendingLabel : styles.busLabel}>{bv.codename}</Text>
                </View>
                ))
              }
              <View key={"post"} style={styles.wayBus}>
                <View style={styles.branch}>
                </View>
              </View>
              <View key={`${sk}station`} style={styles.wayStation}>
                <View style={styles.dot}></View>
                <Text style={styles.stationLabel}>{sv.name}</Text>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
