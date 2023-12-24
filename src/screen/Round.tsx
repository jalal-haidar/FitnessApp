/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Round = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.upperSection}>
                <View style={styles.logoWrapper}>
                    <Image
                        // resizeMode="cover"
                        style={styles.logo}
                        source={require('../assets/FH-Red-Black.png')}
                    />
                </View>
                <View style={styles.sessionsWrapper} />
                <View style={styles.roundsButtonWrapper} />
            </View>
            <View style={styles.lowerSection}>
                <View style={styles.congratsWrapper} />
                <View style={styles.timerWrapper} />
                <View />
            </View>
        </View>
    );
};

// STYLESHEET
const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        // overflow: 'hidden',
    },
    upperSection: {
        backgroundColor: 'gold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // overflow: 'hidden',
    },

    logoWrapper: {
        backgroundColor: 'blue',
        flex: 1,

    },
    logo: {
        width: 200,
        height: 200,
    },

    sessionsWrapper: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        width: 338,
        maxHeight: 26,
    },

    roundsButtonWrapper: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        width: 338,
        maxHeight: 26,
    },

    lowerSection: {
        backgroundColor: 'gray',
        flex: 1,
    },
    congratsWrapper: {
        backgroundColor: 'red',
    },
    timerWrapper: {
        backgroundColor: 'blue',
    },
});

export default Round;
