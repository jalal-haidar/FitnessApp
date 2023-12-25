/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface RoundComponentProps {
    navigation: any,
    route: any
}

const Rounds: React.FC<RoundComponentProps> = ({ navigation, route }) => {

    const rounds = route.params?.rounds || 0;
    const defaultTimerTime = 5;
    const [timer, setTimer] = useState<number>(defaultTimerTime);
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const [rest, setRest] = useState<number>(0);
    const [round, setRound] = useState<number>(1);
    const [session, setSession] = useState<number>(1);
    const countRef = useRef<NodeJS.Timeout | null>(null);

    // function to handle the start button press
    const handleStart = () => {
        setIsRunning(true);

    };
    // function to handle the pause button press
    const handlePause = () => {
        setIsRunning(false);
    };
    // function to handle the continue button press
    const handleContinue = () => {
        setIsRunning(true);
    };
    // function to handle the reset button press
    const handleReset = () => {
        setTimer(0);
        setIsRunning(false);
    };

    const runTimer = () => {
        return setInterval(() => {
            setTimer(prevTimer => {
                if (!isRunning) { return prevTimer; }
                else if (prevTimer === 0) {
                    if (round === rounds && rounds !== 3) {
                        setIsRunning(false);
                        navigation.navigate("Congrats")
                        return 0;
                    }
                    if (rounds === 3) {
                        if (round === 3) {
                            setSession(session + 1);
                            setRound(1);
                            setRest(0);
                        }
                        if (session === 3 && round === 3) {
                            setIsRunning(false);
                            navigation.navigate("Congrats")
                            return 0;
                        }

                    }
                    if (rest === round) {
                        setRound(round + 1);
                    }
                    else {
                        setRest(round);
                    }
                    // Timer reached 0, clear the interval and reset
                    // setRest(round);
                    // console.log(rest, round)
                    // handleReset(); // Call your resetTimer function here
                    return defaultTimerTime;
                }
                return prevTimer - 1
            });
        }, 1000)

    }
    useEffect(() => {
        let interval: any = null;

        if (isRunning) {
            interval = runTimer();

        }

        // Clear the interval when the component unmounts
        return () => { clearInterval(interval) };
    }, [isRunning, rest, round]);











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
                <Text style={styles.bodyText}>{rounds ?? 0} Rounds - {rounds * 5} Minutes</Text>
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
        var jsx = [];
        if (rounds === 3) {
            for (let i = 0; i < 3; i++) {
                jsx.push(<TouchableOpacity disabled={true} style={[styles.sessionButton, session >= (i + 1) ? styles.currentSession : {}]} key={i}>
                    <Text style={[styles.sessionButtonText, session >= (i + 1) ? styles.currentSessionText : {}]}>Session {i + 1}</Text>
                </TouchableOpacity>);
            }
            return (
                <View style={styles.sessionButtonsWrapper}>
                    {jsx}
                </View>
            )
        }
    }
    const RoundButtons = () => {
        var jsx = [];
        if (rounds === 3) {
            for (let i = 0; i < rounds; i++) {
                const isPrevRound = i < (round - 1);
                const isCurrentRound = i === (round - 1);
                const isPrevCurrentRound = i <= (round - 1);
                const isRest = i <= rest - 1;

                jsx.push(<TouchableOpacity disabled={true} style={[styles.roundButton, isPrevCurrentRound ? styles.prevRound : isCurrentRound ? styles.currentRound : {}]} key={i}>
                    <Text style={[styles.roundButtonText, isCurrentRound || isPrevRound ? styles.currentRoundText : {}]}>Round {i + 1}</Text>
                </TouchableOpacity>);
                if (i !== rounds - 1) {
                    jsx.push(<TouchableOpacity disabled={true} style={[styles.roundButton, isPrevCurrentRound && isRest ? styles.prevRest : {}]} key={i + 'a'}>
                        <Text style={[styles.roundButtonText, isPrevCurrentRound && isRest ? styles.currentRoundText : {}]}>Rest</Text>
                    </TouchableOpacity>);
                }
            }
            return (
                <View style={styles.roundButtonsWrapper}>
                    {jsx}
                </View>
            )
        }
        else {
            for (let i = 0; i < rounds; i++) {
                const isPrevRound = i < (round - 1);
                const isCurrentRound = i === (round - 1);
                const isPrevCurrentRound = i <= (round - 1);
                const isRest = i <= rest - 1;

                jsx.push(<TouchableOpacity disabled={true} style={[styles.roundButton, isPrevCurrentRound ? styles.prevRound : isCurrentRound ? styles.currentRound : {}]} key={i}>
                    <Text style={[styles.roundButtonText, isCurrentRound || isPrevRound ? styles.currentRoundText : {}]}>Round {i + 1}</Text>
                </TouchableOpacity>);
                // if (i !== rounds - 1) {
                //     jsx.push(<TouchableOpacity disabled={true} style={[styles.roundButton, isPrevCurrentRound && isRest ? styles.prevRest : {}]} key={i + 'a'}>
                //         <Text style={[styles.roundButtonText, isPrevCurrentRound && isRest ? styles.currentRoundText : {}]}>Rest</Text>
                //     </TouchableOpacity>);
                // }
            }
            return (
                <View style={styles.roundButtonsWrapper}>
                    {jsx}
                </View>
            )

        }
    }
    const Body = () => {
        return (
            <View style={styles.body}>
                <BodyText />
                <BodyButtons />
            </View>
        )
    }

    const FooterTimer = () => {
        if (round !== rest) {
            return (
                <View style={styles.footerTimerWraper}>
                    <TouchableOpacity onPress={handleStart}>
                        <Image
                            resizeMode="cover"
                            source={require('../assets/Ellipse.png')}
                        />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.RestfooterTimerWraper}>
                    <TouchableOpacity onPress={handleStart}>
                        <Image
                            resizeMode="cover"
                            source={require('../assets/Ellipse.png')}
                        />
                    </TouchableOpacity>
                </View>
            )

        }

    }
    const FooterCongratText = () => {
        if (round === rest && rounds === 3) {
            return (
                <View style={styles.RestfooterCongratsTextWraper}>
                    <Text style={styles.RestfooterCongratsText}>Round {round} Completed</Text>
                    <Text style={styles.RestfooterCongratsRedText}>You Did Well ..!</Text>
                    <Text style={styles.RestfooterCongratsText}>Take Some Rest</Text>
                </View>
            )
        } else if (round === rest && rounds > 3) {
            return (
                <View style={styles.RestfooterCongratsTextWraper}>
                    <Text style={styles.RestfooterCongratsRedText}>You Did Well ..!</Text>
                    <Text style={styles.RestfooterCongratsText}>Take Some Rest</Text>
                </View>
            )
        }
    }
    const FooterTimerText = () => {
        if (round !== rest && rounds === 3) {
            return (
                <View style={styles.footerTimerTextWrapper}>
                    <Text style={styles.timerRoundText}>Session {session} - Round {round}</Text>
                    <Text style={styles.timerDurationText}>1 Minute</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.timeCounter}>00 : </Text>
                        <Text style={styles.timeCounter}>{timer < 10 ? timer < 0 ? '00' : ('0' + timer) : ''}</Text>
                    </View>
                </View>

            )
        }
        if (round !== rest && rounds > 3) {
            return (
                <View style={styles.footerTimerTextWrapper}>
                    <Text style={styles.timerRoundText}>Round {round}</Text>
                    <Text style={styles.timerDurationText}>5 Minutes</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.timeCounter}>00 : </Text>
                        <Text style={styles.timeCounter}>{timer < 10 ? timer < 0 ? '00' : ('0' + timer) : ''}</Text>
                    </View>
                </View>

            )
        }
        else if (round === rest) {
            return (
                <View style={styles.RestfooeterTimerTextWrapper}>
                    <Text style={styles.ResttimerRoundText}>Rest</Text>
                    <Text style={styles.ResttimerDurationText}>1 Minute</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.ResttimeCounter}>00 : </Text>
                        <Text style={styles.ResttimeCounter}>{timer < 10 ? timer < 0 ? '00' : ('0' + timer) : ''}</Text>
                    </View>
                </View >
            )

        }

    }
    const FooterTimerToggle = () => {
        if (round > rest) {
            return (
                <View style={styles.footerTimerToggleWrapper}>

                    <Image
                        style={styles.footerTimerToggle}
                        resizeMode="cover"
                        source={require('../assets/timerToggle.png')}
                    />
                    {isRunning ? (
                        <TouchableOpacity onPress={handlePause}>
                            <Image
                                style={styles.footerPLayPauseIcon}
                                resizeMode="cover"
                                source={require('../assets/pauseIcon.png')}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={handleContinue}>
                            <Image
                                style={styles.footerPLayPauseIcon}
                                resizeMode="cover"
                                source={require('../assets/playIcon.png')}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            )
        }

    }
    const FooterLowerText = () => {
        if (round === rest) {
            return (
                <View style={styles.RestfooeterLowerTextWrapper}>
                    <Text style={styles.RestfooterLowerText}>Next Round Will Start In 1 Minute</Text>
                </View>
            )
        }

    }
    const Footer = () => {
        return (
            <View style={styles.footer}>
                <FooterCongratText />
                <FooterTimer />
                <FooterTimerText />
                <FooterTimerToggle />
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
        backgroundColor: '#FFFFFF',
    },
    header: {
        width: '100%',
        height: '15%',
        // backgroundColor: '#FFFFFF',
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
        // fontFamily: 'Urbanist',
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
    footerTimerWraper: {
        top: 10,
    },
    RestfooterTimerWraper: {
        position: 'absolute',
        top: 125,
        // backgroundColor: 'gold',
        height: '40%',
        width: '100%',
        alignItems: 'center',
    },
    RestfooeterTimerTextWrapper: {
        // transform: [{ translateY: -135 }],
        textAlign: 'center',

        alignItems: 'center',
        position: 'absolute',
        top: 190,
        // backgroundColor: 'red',
    },
    ResttimerRoundText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    ResttimerDurationText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    ResttimeCounter: {
        color: '#D00D0D',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    footerTimerTextWrapper: {

        transform: [{ translateY: -135 }],
        textAlign: 'center',
    },
    timerRoundText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    timerDurationText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Urbanist',
        textAlign: 'center',
    },
    timeCounter: {
        color: '#D00D0D',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Urbanist',
        textAlign: 'center',
        // width: 100
    },

    footerTimerToggleWrapper: {
        alignItems: 'center',
        position: 'absolute',
        // justifyContent: 'center',

    },
    footerTimerToggle: {
        alignSelf: 'center',
        position: 'absolute',
        top: 300,
    },
    footerPLayPauseIcon: {
        alignSelf: 'center',
        position: 'absolute',
        top: 318,

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
    currentSession: {
        backgroundColor: 'green',

    },
    currentSessionText: {
        color: 'white',
    },
    currentRound: {
        backgroundColor: 'purple',
    },
    currentRoundText: {
        color: 'white',
    },
    prevRound: {
        backgroundColor: 'green',
    },
    prevRest: {
        backgroundColor: 'grey'
    }
});
export default Rounds;