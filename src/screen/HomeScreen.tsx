/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import {

    View,
    Text,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                flex: 1,
                // overflow: 'hidden',
            }}>
            {/* CHILDREN of MAIN VIEW */}
            <View
                style={{
                    // backgroundColor: 'gold',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image style={styles.logo} source={require('../assets/FH-Red-Black.png')} />
            </View>

            {/* LOWER SECTION VIEW */}
            <View
                style={[styles.lowerContainer, styles.upperRounded]}>
                {/* ADJUST BUTTONS HERE */}
                <View
                    style={{
                        alignItems: 'center',
                        rowGap: 20,
                        top: 30,
                    }}>
                    <Text style={styles.titleText}>Welcome To <Text style={styles.innerText}>Fitness Hoopligans</Text></Text>
                    <Text style={styles.baseText}>How Many Rounds Do You Want To Go Today?</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>3 Rounds - 15 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>4 Rounds - 20 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>5 Rounds - 25 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>6 Rounds - 30 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.startButtomText}>Start Timer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// STYLESHEET
const styles = StyleSheet.create({
    logo: {
        top: '10%',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        // marginBottom: 20,
    },
    lowerContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        // borderTopWidth: 1,
        // borderTopColor: 'black',
        // borderBlockColor: 'black',
    },
    upperRounded: {
        height: 50, // Adjust the height of the rounded upper part
        // backgroundColor: 'orange', // Set the background color
        borderTopLeftRadius: 30, // Adjust the radius based on your preference
        borderTopRightRadius: 30,
        // overflow: 'hidden',
        // shadowColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 24,
        textShadowOffset: {
            width: 6,
            height: 10,
        },
    },

    titleText: {
        fontFamily: 'sans-serif',
        // fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    baseText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: 'black',
    },
    innerText: {
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        // backgroundColor: '#841584',
        // padding: 10,
        borderRadius: 10,
        width: '75%',
        height: '9%',
        borderWidth: 1.5,
        borderColor: 'red',
        flexGrow: 1,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontSize: 16,

        alignSelf: 'center',
    },
    startButton: {
        backgroundColor: 'black',
        // padding: 10,
        borderRadius: 10,
        width: '75%',
        height: '9%',
        borderWidth: 1.5,
        // borderColor: 'red',
        flexGrow: 1,
        justifyContent: 'center',
    },
    startButtomText: {
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: 16,

        alignSelf: 'center',
    },

})

export default HomeScreen;
