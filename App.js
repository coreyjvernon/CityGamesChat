import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, View} from 'react-native';


export default class App extends Component {
  state = {
    phone: '',
    name: '',
  }

  handleChange = key => val => {
    this.setState({ [key]: val})
  }

  submitForm = () => {
    alert(this.state.phone + '/n' + this.state.name)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Phone Number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.setState.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput 
          placeholder="Name"
          style={styles.input}
          value={this.setState.phone}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 1,
    borderRadius: 5
  }
});
