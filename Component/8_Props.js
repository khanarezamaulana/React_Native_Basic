import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Componen extends Component {
    render(){
        return(
            <View>
                <Text style={{fontSize: 25}}>
                    Halo this is Component!
                </Text>
                <Text>
                    {this.props.isi}
                </Text>
            </View>
        )
    }
}

export default Componen;