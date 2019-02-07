import React, { Component } from 'react';
import { View, Image } from 'react-native';

class App extends Component {

  render(){
    return(
      <View>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://as01.epimg.net/en/imagenes/2017/06/07/football/1496834105_053510_1496834232_noticia_normal.jpg'}}
        />
        <Image
          style={{width: 200, height: 200}}
          source={require('./image/Reza.jpg')}
        />
      </View>
    )
  }
}

export default App;