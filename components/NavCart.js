import React, { Component } from 'react';
import { Icon,Header } from 'react-native-elements'
import { View, Text } from 'react-native';

export default class NavCart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'shopping-bag', type:'font-awesome',  color: '#fff' }}
          />

            
        )
    }
}