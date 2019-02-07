import React, { Component } from 'react';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  constructor(){
    super()
    this.state = {
      z: 'Good Morning!'
    }
  }

  x = 'Halo World!'
  a = (b)=>{
    return `Selamat Pagi ${b}!`
  }
  render(){
    var y = 'Halo Dunia!'
    var c = (d)=>{
      return `Halo ${d}`
    }
    return(
      <View>
        <Text>Tes Android App</Text>
        <Text>{this.x}</Text>
        <Text>{y}</Text>
        <Text>{this.state.z}</Text>
        <Text>{this.a('Reza')}</Text>
        <Text>{c('Reza')}</Text>
      </View>
    )
  }
}

export default App;