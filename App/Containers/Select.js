import React from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Toolbar from '../Components/Toolbar';
import Input from '../Components/Input';

import I18n from '../I18n'

import BabatongActions from '../Redux/BabatongRedux'
// Styles
import styles from './Styles/SelectStyle'

class Select extends React.PureComponent {
  state = {
    query: "",
    list: []
  }

  componentDidMount() {
    this.filter("");
  }

  goInfo(line) {
    this.props.navigation.navigate("InfoScreen", { line });
  }

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this.goInfo(item) }>
          <Text style={styles.lineLabel}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  filter(text) {
    let t = [];
    for(let i = 0; i < this.props.raw.length; i++) {
      if(this.props.raw[i].startsWith(text)) t.push(this.props.raw[i]);
    }
    this.setState({ list: t });
  }

  //renderHeader = () =>
  //  <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  //renderFooter = () =>
  //  <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  //renderEmpty = () =>
  //  <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <View style={styles.separator}></View>

  keyExtractor = (item, index) => `${index}`
  oneScreensWorth = 10
  render () {
    return (
      <View style={styles.mainContainer}>
        <Toolbar title={I18n.t("name")} />
        <View style={styles.container} >
          <Input placeholder={I18n.t("select.placeholder")} onChangeText={this.filter.bind(this)} />
          <FlatList
            style={styles.list}
            data={this.state.list}
            renderItem={this.renderRow.bind(this)}
            keyExtractor={this.keyExtractor}
            initialNumToRender={this.oneScreensWorth}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    raw: state.database.candidates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
