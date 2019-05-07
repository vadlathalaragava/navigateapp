import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import NavCart from '../components/NavCart';
import TopNav from '../components/topNav';
import { Icon, Header } from 'react-native-elements'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: <NavCart navigation={navigation} />

            // headerRight: <TopNav navigation={navigation} />
        }

    }
    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
    render() {
      
        return (
            <View>
                <Text>Home</Text>
                <Button title="Go Products" onPress={() => this.props.navigation.navigate('Products')} />
                <Camera
                    ref={cam => { this.camera = cam }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                        [CAPTURE]
                </Text>
                </Camera>
            </View>
        )
    }
    
}