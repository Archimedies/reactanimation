import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

// import firebase from './Firebase';

export default class AboutScreen extends Component {
    // Fade animation var, set to 0 by default
    animationFade = new Animated.Value(0);

    // When the component loads, set the timing of the animation to 1000 ms and set the animation value to 1.
    componentDidMount() {
        Animated.timing(this.animationFade, {
            duration: 1000,
            toValue: 1
        }).start()
    }

    // Some crap I left in because I was playing with it and didn't want to remove this reference

    // Create a global var
    // state = { text: 'Check'}

    // On firebase init, 
    // componentDidMount(){
        // CRUD
        // Create, Read, Update, Delete
        // Set = Update (objects), Push = create (for arrays only),

    //     // Create a table called users and enter test for the name and test for the value.
    //     firebase.database().ref('users').set({
    //         'test': 'test'
    //     });

    //     // Read data
    //     firebase.database().ref('users').on('value', res =>{
    //         this.setState({data : res})
    //     });
    // }

    static navigationOptions = {
        title: 'Studio',
        headerStyle: {
            backgroundColor: '#f29111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Animated.View style={{...styles.header, opacity: this.animationFade}}>
                    <Text style={styles.headertext}>Sketch Studio</Text>
                </Animated.View>
                <View style={styles.container}>
                    <Animated.View style={{opacity: this.animationFade}}>
                        {/* Basically the work-around to styling a button. */}
                        <TouchableOpacity style={styles.containerTO}>
                            <Animated.Text style={{...styles.containertext, opacity: this.animationFade}}>Create New Sketch</Animated.Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerTO}>
                            <Animated.Text style={{...styles.containertext, opacity: this.animationFade}} onPress={() => navigate('Sketches')}>Open existing Sketch</Animated.Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    header:{
        flex: 0.1,
        marginTop: 25,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#f2a311'
    },
    headertext:{
        justifyContent: 'flex-start',
        margin: 10,
        fontSize: 20,
    },
    containerTO:{
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#1185f2',
    },
    containertext:{
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    }
});