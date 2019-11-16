import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { BinSvg } from './BinSvg';

const { width } = Dimensions.get('window');

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <View style={styles.item}>
        <CheckBox
          containerStyle={{backgroundColor: '#b5c2b4'}}
          checkedColor='green'
          uncheckedColor='#7a42f4'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
         />
        <Text style={styles.taskText}>{this.props.item.value}</Text>
        <CheckBox
          iconType='material'
          uncheckedIcon='clear'
          uncheckedColor='red'
          onPress={() => {this.props.itemPressHandler(this.props.item)} }
          checked={false}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: 24,
    alignSelf: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b5c2b4',
    width: width - 40,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
})

export default ListItem;
