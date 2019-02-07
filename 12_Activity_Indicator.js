import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class App extends Component {

  render(){
    return(
      <View>
        <ActivityIndicator size='small' color='blue'/>
        <ActivityIndicator size='large' color='yellow'/>
        <ActivityIndicator size='small' color='red'/>
        <ActivityIndicator size='large' color='black'/>
      </View>
    )
  }
}

export default App;