/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as React from 'react';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import { FontSize, FontFamily, Color, Border } from '../GlobalStyles';

const SplashScreen = () => {
    return (
        <View style={styles.splashScreen}>
            <Image
                style={styles.fhRedBlack1Icon}
                resizeMode="cover"
                source={require('../assets/FH-Red-Black.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    homeindicatorLayout: {
        width: 393,
        position: 'absolute',
    },
    leftSideLayout: {
        height: 21,
        width: 54,
        left: '50%',
        position: 'absolute',
    },
    textPosition: {
        top: 1,
        position: 'absolute',
    },
    rightSidePosition: {
        height: 13,
        left: '50%',
        position: 'absolute',
    },

    leftSide: {
        marginLeft: -168.5,
        top: 14,
    },
    rightSide: {
        marginLeft: 92.5,
        top: 19,
        width: 77,
    },


    fhRedBlack1Icon: {
        marginTop: -140,
        marginLeft: -139.5,
        top: '50%',
        width: 279,
        height: 279,
        left: '50%',
        position: 'absolute',
    },
    splashScreen: {
        flex: 1,
        height: 852,
        overflow: 'hidden',
        width: '100%',
    },
});

export default SplashScreen;
