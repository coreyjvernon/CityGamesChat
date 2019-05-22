import React, {Component} from 'react';
import {StyleSheet, Text, Alert, TouchableOpacity, TextInput, View} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';


export default class App extends Component {
  state = {
    phone: '',
    name: '',
  }

  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('@storage_Key', 'stored value')
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  
  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key')
  //     if(value !== null) {
  //       // value previously stored
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  // }

  handleChange = key => val => {
    this.setState({ [key]: val})
  }

  // componentWillMount(){
  //   AsyncStorage.getItem('userPhone').then(val=>{
  //     if(val){
  //       this.setState({phone:val})
  //     }
  //   })
  // }

  submitForm = /*async*/ () => {
    if (this.state.phone.length < 10){
      Alert.alert('Error', 'Wrong Number')
    } else if (this.state.name.length < 3) {
      Alert.alert('Error', 'Wrong Name')
    } else{
// save user data
      Alert.alert('Good')
        // await AsyncStorage.setItem('userPhone', this.state.phone);
    }
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
          <Text style={styles.btnText}>Enter</Text>
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
    marginBottom: 10,
    borderRadius: 5
  },
  btnText: {
    color: 'darkblue',
    fontSize: 20
  }
});
