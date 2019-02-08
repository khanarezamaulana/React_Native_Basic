import React, { Component } from 'react';
import { View, TouchableHighlight, Text} from 'react-native';

class App extends Component {
  state = {x: 'Andi'}
  render(){
    return(
      <View>
        <Text style={{fontSize: 30}}>
          Halo {this.state.x}
        </Text>
        <View style={{
          flex: 1, justifyContent: 'center', paddingHorizontal: 15, margin: 15
        }}>
          <TouchableHighlight
          style={{
            alignItems: 'center',
            backgroundColor: 'pink',
            padding: 20
          }}
          onPress={() => {this.setState({x: 'Budi'})}}>
            <Text>Klik sini</Text>
          </TouchableHighlight>
        </View>    
      </View>
    )
  }
}

export default App;