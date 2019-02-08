import React, { Component } from 'react';
import { View, TextInput, Button, Text} from 'react-native';

class App extends Component {
  state = {nama: ""}
  render(){
    return(
      <View style={{padding: 25}}>
        <TextInput style={{height: 50}} placeholder="Ketik nama Anda"
          keyboardType = 'default' // 'number-pad', 'numeric', 'phone-pad'
          onChangeText = {(e) => {this.setState({nama: e})}}/>  

        <Button title="Klik Sini" color="black"/>
        {this.state.nama ? 
        <Text style={{fontSize: 25, marginTop: 10}}>{this.state.nama}</Text> : <View></View>}
      </View>
    )
  }
}

export default App;