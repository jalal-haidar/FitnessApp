/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Round1 = () => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            // overflow: 'hidden',
        }}>
            {/* CHILDREN of MAIN VIEW */}
            <View
                style={{
                    flex: 1,
                }}>
                {/* UPPER SECTION */}
                <View
                    style={{
                        backgroundColor: 'gold',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // overflow: 'hidden',

                    }}>
                    <Image
                        // resizeMode="cover"
                        style={styles.logo}
                        source={require('../assets/FH-Red-Black.png')}
                    />
                    <Text style={styles.titleText}>Exercise</Text>
                    <Text style={styles.baseText}>3 Rounds - 15 Minutes</Text>
                </View>
                {/* SESSIONS AND ROUND BUTTONS */}
                <View
                    style={{ backgroundColor: 'gray', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '338', maxHeight: '26' }}
                >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Session 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Session 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Session 3</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.roundsButtonWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Session 3</Text>
                    </TouchableOpacity>
                    <View style={styles.childView}>
                        <Text>Child View 2</Text>
                    </View>
                    <View style={styles.childView}>
                        <Text>Child View 3</Text>
                    </View>
                </View>
            </View>

            {/* LOWER SECTION VIEW */}
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                {/* ADJUST BUTTONS HERE */}


                <View style={{ backgroundColor: 'blue', flex: 1 }}>
                    {/* ADJUST BUTTONS HERE */}

                </View>
                <View style={{ backgroundColor: '#841584', flex: 1 }}>
                    {/* ADJUST BUTTONS HERE */}

                </View>
            </View>
        </View>
    );
};

// STYLES
const styles = StyleSheet.create({
    logo: {
        // top: '25%',
        width: '70%',
        height: '100%',
        // alignSelf: 'center',
        // marginBottom: 20,
    },
    titleText: {
        top: '-25%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    baseText: {
        top: '-20%',
        fontSize: 15,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D00D0D',
    },
    button: {
        backgroundColor: '#F4F4F4',
        // padding: 10,
        borderRadius: 10,
        width: '336',
        maxHeight: '26',
        // borderWidth: 1,
        // borderColor: 'red',
        // flexGrow: 1,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontSize: 16,

        alignSelf: 'center',
    },
    roundsButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 352, // Hug content width up to a maximum of 352 pixels
        maxHeight: 26, // Hug content height up to a maximum of 26 pixels
        top: 299,
        left: 21,
        gap: 8, // Space between child views
    },

});


export default Round1;
