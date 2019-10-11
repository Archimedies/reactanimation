import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

const width = '80%';

export default class LoginScreen extends Component {

    // Fade animation var, set to 0 by default
    animationFade = new Animated.Value(0);
    animationSpring = new Animated.Value(100);

    // When the component loads, set the timing of the animation to 1000 ms and set the animation value to 1.
    componentDidMount() {
        Animated.timing(this.animationFade, {
            duration: 1000,
            toValue: 1
        }).start()

        // Not chained, but a secondary animation for spring
        Animated.spring(this.animationSpring,{
            toValue: 0,
            speed: 0,
            bounciness: 10
        }).start()
    }

    render() {
        // Grab the navigation property and store it as an object
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Animated.View style={{...styles.header, opacity: this.animationFade}}>
                    {/* Animated with the Fade animation */}
                    <Animated.Text style={{...styles.headertext, opacity: this.animationFade}}>Slap that Login button!</Animated.Text>
                </Animated.View>
                <View style={styles.formcontainer}>
                    {/* Fake login information, now animated with bouncy. Also moves it down nicely. */}
                    <Animated.Text style={{...styles.welcometext, left: this.animationSpring}}>Archimedies</Animated.Text>
                    <Animated.Text style={{...styles.welcometext, right: this.animationSpring}}>*************</Animated.Text>
                </View>
                <Animated.View style={{...styles.welcomebuttoncontainer, opacity: this.animationFade}}>
                    <Button style={styles.welcomebutton} title='Login' onPress={() =>
                    // Go to the homepage on 'login'
                        navigate('Sketches')
                        }/>
                </Animated.View>
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
        justifyContent: 'center',
    },
    header:{
        flex: 0.1,
        marginTop: 25,
        backgroundColor: '#f2a311',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 15
    },
    headertext:{
        justifyContent: 'flex-start',
        margin: 0,
        fontSize: 20,
    },
    formcontainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        lineHeight: 30
    },
    welcometext: {
        fontSize: 20,
        color: '#000'
    },
    welcomebuttoncontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
        width,
    },
    welcomebutton: {
        height: '30px'
    }
});