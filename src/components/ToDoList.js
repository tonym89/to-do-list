import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, ListView, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import ListItem from './ListItem';

const { width } = Dimensions.get('window');

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      toDoItems: [],
      checked: false
    }
  }


  textChangeHandler = (text) => {
    this.setState({ text })
  }

  itemPressHandler = (item) => {
    let index = this.state.toDoItems.indexOf(item);
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.filter((_, i) => i !== index)
      })
    );
  }

  submitHandler = () => {
    let length = this.state.toDoItems.length
    let text = this.state.text
    let object = { value : text}
    this.state.toDoItems[this.state.toDoItems.length] = object
    this.setState({text:''});
    console.log(this.state.toDoItems);
  }

  render(){
    return (
      <View style = {styles.mainView}>
        <Text style= {styles.titleText}>To Do List</Text>
        <TextInput
          style = {styles.input}
          placeholder = "Enter New Task"
          placeholderTextColor = "#d9d4d4"
          value={this.state.text}
          onChangeText={this.textChangeHandler.bind(this)} />
        <TouchableOpacity style={styles.button} onPress={this.submitHandler.bind(this)}>
          <Text style= {styles.Button}>Add Task</Text>
        </TouchableOpacity>
        <View style = {{height: 800}}>
          <FlatList
            data={this.state.toDoItems}
            renderItem={({ item }) =>
            <ListItem item={item} itemPressHandler={this.itemPressHandler}/>}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: 40,
    height: 40,
    width: width - 70,
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
  },
  button: {
    width: width - 200,
    margin: 30,
    display: 'flex',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#409886',
    shadowColor: '#409886',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
   },
  titleText: {
    margin: 10,
    marginTop: 70,
    color: 'white',
    fontSize: 48
  },
  taskText: {
    fontSize: 30,
    alignSelf: 'center'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#b5c2b4',
    width: width - 40,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
