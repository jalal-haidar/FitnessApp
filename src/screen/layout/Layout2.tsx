/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Layout2 = () => {
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
    const BodyText = () => {
        return (
            <View style={styles.bodyTextWrapper}>
                <Text style={styles.titleText}>Exercise</Text>
                <Text style={styles.bodyText}>3 Rounds - 15 Minutes</Text>
            </View>
        )
    }
    const BodyButtons = () => {
        return (
            <View style={styles.bodyButtonWrapper}>
                <SessionButtons />
                <RoundButtons />
            </View>
        )
    }
    const SessionButtons = () => {
        return (
            <View style={styles.sessionButtonsWrapper}>
                <TouchableOpacity disabled={true} style={styles.sessionButton}>
                    <Text style={styles.sessionButtonText}>Session 1</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.sessionButton}>
                    <Text style={styles.sessionButtonText}>Session 2</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.sessionButton}>
                    <Text style={styles.sessionButtonText}>Session 3</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const RoundButtons = () => {
        return (
            <View style={styles.roundButtonsWrapper}>
                <TouchableOpacity disabled={true} style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>Round 1</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>Rest</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>Round 2</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>Rest</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={true} style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>Round 3</Text>
                </TouchableOpacity>




            </View>
        )
    }
    const Body = () => {
        return (
            <View style={styles.body}>
                <BodyText />
                <BodyButtons />
            </View>
        )
    }

    const FooterCongratText = () => {
        return (
            <View style={styles.footerCongratsTextWraper}>
                <Text style={styles.footerCongratsText}>Round 1 Completed</Text>
                <Text style={styles.footerCongratsRedText}>You Did Well ..!</Text>
                <Text style={styles.footerCongratsText}>Take Some Rest</Text>
            </View>
        )
    }

    const FooterTimer = () => {
        return (
            <View style={styles.RestfooterTimerWraper}>
                <Image
                    resizeMode="cover"
                    source={require('../assets/Ellipse.png')}
                />
            </View>
        )
    }
    const FooterTimerText = () => {
        return (
            <View style={styles.RestfooeterTimerTextWrapper}>
                <Text style={styles.ResttimerRoundText}>Rest</Text>
                <Text style={styles.ResttimerDurationText}>1 Minute</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.ResttimeCounter}>00 : </Text>
                    <Text style={styles.ResttimeCounter}>00</Text>
                </View>
            </View>
        )
    }
    const FooterLowerText = () => {
        return (
            <View style={styles.fooeterLowerTextWrapper}>
                <Text style={styles.footerLowerText}>Next Round Will Start In 1 Minute</Text>
            </View>
        )
    }

    const Footer = () => {
        return (
            <View style={styles.footer}>
                <FooterCongratText />
                <FooterTimer />
                <FooterTimerText />
                <FooterLowerText />

            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Body />
            <Footer />
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
    body: {
        width: '100%',
        height: '25%',
        // backgroundColor: '#F8F8F8',
    },
    bodyTextWrapper: {
        width: '100%',
        height: '50%',
        // backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    titleText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Urbanist',
    },
    bodyText: {
        color: '#D00D0D',
        fontWeight: '600',
        fontSize: 15,
    },
    bodyButtonWrapper: {
        width: '100%',
        justifyContent: 'space-evenly',
        // backgroundColor: 'green',
        flex: 1,


    },
    sessionButtonsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    sessionButton: {
        width: 100,
        height: 30,
        backgroundColor: '#F4F4F4',
        borderRadius: 31,
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sessionButtonText: {
        color: '#1A1A1A',
        fontWeight: '500',
        fontSize: 12,
        fontFamily: 'Urbanist',
        alignSelf: 'center',
    },
    roundButtonsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    roundButton: {
        width: 64,
        height: 30,
        borderRadius: 31,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',

    },
    roundButtonText: {
        color: '#828282',
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Urbanist',
        alignSelf: 'center',
    },

    footer: {
        width: '100%',
        height: '60%',
        // backgroundColor: 'gold',
        alignItems: 'center',
    },
    RestfooterCongratsTextWraper: {
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        height: '30%',
        // backgroundColor: 'green',
        gap: 7,
        top: 10,
    },
    RestfooterCongratsText: {
        color: '#333333',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Urbanist',
    },
    RestfooterCongratsRedText: {
        color: '#D00D0D',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Urbanist',
    },
    RestfooterTimerWraper: {
        position: 'absolute',
        top: 125,
        // backgroundColor: 'red',
        height: '40%',
        width: '100%',
        alignItems: 'center',
    },
    RestfooeterTimerTextWrapper: {
        alignItems: 'center',
        position: 'absolute',
        top: 190,
    },
    ResttimerRoundText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
    },
    ResttimerDurationText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Urbanist',
    },
    ResttimeCounter: {
        color: '#D00D0D',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
    },
    RestfooeterLowerTextWrapper: {
        alignItems: 'center',
        position: 'absolute',
        top: 330,
        // backgroundColor: 'blue',
        height: '30%',
        width: '100%',
    },
    RestfooterLowerText: {
        top: 10,
        color: '#1A1A1A',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Urbanist',

    },

    logo: {
        top: '10%',
        width: '70%',
    },
});
export default Layout2;