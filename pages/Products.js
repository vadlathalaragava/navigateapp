import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NavCart  from '../components/NavCart';
export default class Products extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: <NavCart navigation={navigation} />

            // headerRight: <TopNav navigation={navigation} />
        }
    }
    render() {
        return (
            <View>
                <Card title="CARD WITH DIVIDER" image={require("../assets/images/books/1.png")}>

                    <View >
                        <Text style={{ marginBottom: 10 }} >
                            Hello React native components
                        </Text>
                        <Button title="View Now" />
                    </View>


                </Card>

            </View>
        )
    }
}