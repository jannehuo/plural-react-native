import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  fieldsContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  input: {
    height: 40
  }
});

export default class EventForm extends Component {
  state = {
    title: '',
    date: null
  };

  handlePress = () => {
    this.props.navigation.navigate('list');
  }

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.fieldsContainer}>
          <TextInput style={styles.input} />
        </View>
        <TouchableHighlight onPress={this.handlePress}>
            <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}