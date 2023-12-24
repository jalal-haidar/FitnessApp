/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, } from 'react-native';
import FastImage from 'react-native-fast-image';
const CongratsScreen = () => {
    const Header = () => {
        return (
            <View style={styles.header}>
                <Image
                    resizeMode='contain'
                    style={styles.logo}
                    source={require('../assets/FH-Red-Black.png')}
                />
            </View>
        )
    }
    const CongratsGif = () => {
        return (
            <View style={styles.gifWrapper}>
                <FastImage
                    // resizeMode='cover'
                    source={require('../assets/CongratsGIF.gif')}
                    style={styles.gif}
                    resizeMode={FastImage.resizeMode.contain}

                />
            </View>
        )
    }
    const CongratsText = () => {
        return (
            <View style={styles.congratsTextWrapper}>
                <Text style={styles.congratsTextUpper}>Congratulations</Text>
                <Text style={styles.congratsTextMiddle}>Your Exercise Is Completed</Text>
                <Text style={styles.congratsTextLower}>You Did An Awesome Job</Text>
            </View>
        )
    }
    const Body = () => {
        return (
            <View style={styles.body}>
                <CongratsGif />
                <CongratsText />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Body />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '15%',
        // backgroundColor: '#C8C8C8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        top: '10%',
        width: '70%',
    },
    body: {
        width: '100%',
        height: '85%',
        // backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gif: {
        width: 154,
        height: 154,
        // backgroundColor: 'red',
    },
    congratsTextWrapper: {
        // backgroundColor: 'green',
        alignItems: 'center',
    },
    congratsTextUpper: {
        color: '#D00D0D',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1,
        fontFamily: 'Urbanist',
    },
    congratsTextMiddle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Urbanist',

    },
    congratsTextLower: {
        color: '#1A1A1A',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Urbanist',
    },

});
export default CongratsScreen;