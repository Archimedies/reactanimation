import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Sketches',
        headerStyle: {
            backgroundColor: '#f29111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    // Create animation named animationRotate for use in rotating the dates on load
    // Fade animation var, set to 0 by default
    animationFade = new Animated.Value(0);

    // When the component loads, set the timing of the animation to 1000 ms and set the animation value to 1.
    componentDidMount() {
        Animated.timing(this.animationFade, {
            duration: 1000,
            toValue: 1
        }).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{...styles.header, opacity: this.animationFade}}>
                    <Animated.Text style={{...styles.headertext, opacity: this.animationFade}}>Your Saved Sketch files</Animated.Text>
                </Animated.View>
                <Animated.View style={{...styles.container, opacity: this.animationFade}}>
                    <ScrollView style={styles.scrollcontainer}>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/enchanted.png")}></Image>
                        </View>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/ring.png")}></Image>
                        </View>
                        <View>
                            <Text style={styles.scrolltext}>10/1/2019:</Text>
                            <Image style={styles.images} source={require("../assets/mindless.png")}></Image>
                        </View>
                    </ScrollView>
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
    scrollcontainer:{
        // If I want to add anything to change the scrollview
    },
    scrolltext:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 10
    },
    images: {
        flex: 1,
        width: 300,
        height: 300,
    }
});