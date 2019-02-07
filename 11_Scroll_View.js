import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class App extends Component {
  state = {
    data: [
      'Andi', 'Budi', 'Caca', 'Deni', 'Euis', 'Fafa',
      'Gilang', 'Hani', 'Ipin', 'Januar', 'Koko', 'Lina',
      'Maman', 'Nani', 'Opik', 'Prili', 'Qonita', 'Rano', 
      'Susi', 'Tuti', 'Upin', 'Vanya', 'Wawan', 'Xonia',
      'Yayan', 'Zaenudin'
  ]
  }
  render(){
    var output = this.state.data.map((val, i)=>{
      return(
        <Text style={{fontSize: 30}} key={i}>{val}</Text>
      )
    })
    return(
      <ScrollView>
        {output}
      </ScrollView>
    )
  }
}

export default App;