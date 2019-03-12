import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/InputStyle'
import { Colors } from '../Themes'

export default class Input extends Component {
  // // Prop type warnings
  static propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <TextInput style={styles.input} placeholder={this.props.placeholder} placeholderTextColor={Colors.light} onChangeText={this.props.onChangeText} />
    )
  }
}
