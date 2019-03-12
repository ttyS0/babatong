import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, ToolbarAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/ToolbarStyle'
import { Colors } from '../Themes'

export default class Toolbar extends Component {
  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    navIconName: PropTypes.string,
    overflowIconName: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.object),
    onIconClicked: PropTypes.func,
    onActionSelected: PropTypes.func
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      //<ToolbarAndroid style={styles.toolbar} titleColor="#FFF" title={this.props.title} />
      <Icon.ToolbarAndroid
      style={styles.toolbar}
      title={this.props.title}
      titleColor={Colors.text}
      subtitle={this.props.subtitle}
      subtitleColor={Colors.light}
      iconColor={Colors.text}
      iconSize={20}
      navIconName={this.props.navIconName}
      overflowIconName={this.props.overflowIconName}
      onIconClicked={this.props.onIconClicked}
      onActionSelected={this.props.onActionSelected}
      actions={this.props.actions} />
    )
  }
}
