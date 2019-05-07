import  React, {Component} from 'react';

import {View , Text} from 'react-native';

export default class Invoice extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text style={{color:'black'}}>Invoice</Text>
            </View>
        )
    }
}