import  React, {Component} from 'react';

import {View , Text} from 'react-native';

export default class Cart extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text style={{color:'black'}}>Cart</Text>
            </View>
        )
    }
}