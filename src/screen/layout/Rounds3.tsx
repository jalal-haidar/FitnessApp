// /* eslint-disable prettier/prettier */
// import React, { useState, useEffect, useRef } from 'react';
// import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// interface Round3ComponentProps { }

// const Round3: React.FC<Round3ComponentProps> = () => {

//     const [timer, setTimer] = useState<number>(60);
//     const [isActive, setIsActive] = useState<boolean>(false);
//     const [isPaused, setIsPaused] = useState<boolean>(false);
//     const countRef = useRef<NodeJS.Timeout | null>(null);

//     // function to handle the start button press
//     const handleStart = () => {
//         setIsActive(true);
//         setIsPaused(false);
//         if (countRef.current) {
//             clearInterval(countRef.current);
//         }
//         countRef.current = setInterval(() => {
//             setTimer(prevTimer => {
//                 if (prevTimer === 0) {
//                     // Timer reached 0, clear the interval and reset
//                     clearInterval(countRef.current ?? 0);
//                     handleReset(); // Call your resetTimer function here
//                     return prevTimer;
//                 }
//                 return prevTimer - 1
//             });
//         }, 1000);
//     };
//     // function to handle the pause button press
//     const handlePause = () => {
//         if (countRef.current) {
//             clearInterval(countRef.current);
//         }
//         setIsPaused(true);
//     };
//     // function to handle the continue button press
//     const handleContinue = () => {
//         setIsPaused(false);
//         if (countRef.current) {
//             clearInterval(countRef.current);
//         }
//         countRef.current = setInterval(() => {
//             setTimer(prevTimer => {
//                 if (prevTimer === 0) {
//                     // Timer reached 0, clear the interval and reset
//                     clearInterval(countRef.current ?? 0);
//                     handleReset(); // Call your resetTimer function here
//                     return prevTimer;
//                 }
//                 return prevTimer - 1;
//             });
//         }, 1000);
//     };
//     // function to handle the reset button press
//     const handleReset = () => {
//         setTimer(0);
//         setIsActive(false);
//         setIsPaused(false);
//         if (countRef.current) {
//             clearInterval(countRef.current);
//         }
//     };

//     useEffect(() => {
//         // Automatically start the timer when the component is rendered
//         handleStart();

//         // Clear the interval when the component unmounts
//         return () => { };
//     }, []);











//     const Header = () => {
//         return (
//             <View style={styles.header}>
//                 <Image
//                     resizeMode='contain'
//                     style={styles.logo}
//                     source={require('../assets/FH-Red-Black.png')}
//                 />
//             </View>
//         )
//     }
//     const BodyText = () => {
//         return (
//             <View style={styles.bodyTextWrapper}>
//                 <Text style={styles.titleText}>Exercise</Text>
//                 <Text style={styles.bodyText}>3 Rounds - 15 Minutes</Text>
//             </View>
//         )
//     }
//     const BodyButtons = () => {
//         return (
//             <View style={styles.bodyButtonWrapper}>
//                 <SessionButtons />
//                 <RoundButtons />
//             </View>
//         )
//     }
//     const SessionButtons = () => {
//         return (
//             <View style={styles.sessionButtonsWrapper}>
//                 <TouchableOpacity disabled={true} style={styles.sessionButton}>
//                     <Text style={styles.sessionButtonText}>Session 1</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.sessionButton}>
//                     <Text style={styles.sessionButtonText}>Session 2</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.sessionButton}>
//                     <Text style={styles.sessionButtonText}>Session 3</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//     const RoundButtons = () => {
//         return (
//             <View style={styles.roundButtonsWrapper}>
//                 <TouchableOpacity disabled={true} style={styles.roundButton}>
//                     <Text style={styles.roundButtonText}>Round 1</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.roundButton}>
//                     <Text style={styles.roundButtonText}>Rest</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.roundButton}>
//                     <Text style={styles.roundButtonText}>Round 2</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.roundButton}>
//                     <Text style={styles.roundButtonText}>Rest</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity disabled={true} style={styles.roundButton}>
//                     <Text style={styles.roundButtonText}>Round 3</Text>
//                 </TouchableOpacity>




//             </View>
//         )
//     }
//     const Body = () => {
//         return (
//             <View style={styles.body}>
//                 <BodyText />
//                 <BodyButtons />
//             </View>
//         )
//     }

//     const FooterTimer = () => {
//         return (
//             <View style={styles.footerTimerWraper}>
//                 <Image
//                     resizeMode="cover"
//                     source={require('../assets/Ellipse.png')}
//                 />
//             </View>
//         )
//     }
//     const FooterTimerText = () => {
//         return (
//             <View style={styles.fooeterTimerTextWrapper}>
//                 <Text style={styles.timerRoundText}>Session 1 - Round 1</Text>
//                 <Text style={styles.timerDurationText}>1 Minute</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Text style={styles.timeCounter}>00 : </Text>
//                     <Text style={styles.timeCounter}>{timer < 10 ? '0' + timer : timer}</Text>
//                 </View>
//             </View>
//         )
//     }
//     const FooterTimerToggle = () => {
//         return (
//             <View style={styles.footerTimerToggleWrapper}>

//                 <Image
//                     style={styles.footerTimerToggle}
//                     resizeMode="cover"
//                     source={require('../assets/timerToggle.png')}
//                 />
//                 {isActive && !isPaused ? (
//                     <TouchableOpacity onPress={handlePause}>
//                         <Image
//                             style={styles.footerPLayPauseIcon}
//                             resizeMode="cover"
//                             source={require('../assets/pauseIcon.png')}
//                         />
//                     </TouchableOpacity>
//                 ) : (
//                     <TouchableOpacity onPress={handleContinue}>
//                         <Image
//                             style={styles.footerPLayPauseIcon}
//                             resizeMode="cover"
//                             source={require('../assets/playIcon.png')}
//                         />
//                     </TouchableOpacity>
//                 )}
//             </View>
//         )
//     }
//     const Footer = () => {
//         return (
//             <View style={styles.footer}>
//                 <FooterTimer />
//                 <FooterTimerText />
//                 <FooterTimerToggle />
//             </View>
//         )
//     }
//     return (
//         <SafeAreaView style={styles.container}>
//             <Header />
//             <Body />
//             <Footer />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         width: '100%',
//         height: '15%',
//         // backgroundColor: '#C8C8C8',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     body: {
//         width: '100%',
//         height: '25%',
//         // backgroundColor: '#F8F8F8',
//     },
//     bodyTextWrapper: {
//         width: '100%',
//         height: '50%',
//         // backgroundColor: 'gold',
//         alignItems: 'center',
//         justifyContent: 'space-around',

//     },
//     titleText: {
//         color: '#000',
//         fontWeight: '700',
//         fontSize: 20,
//         fontFamily: 'Urbanist',
//     },
//     bodyText: {
//         color: '#D00D0D',
//         fontWeight: '600',
//         fontSize: 15,
//     },
//     bodyButtonWrapper: {
//         width: '100%',
//         justifyContent: 'space-evenly',
//         // backgroundColor: 'green',
//         flex: 1,


//     },
//     sessionButtonsWrapper: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-around',

//     },
//     sessionButton: {
//         width: 100,
//         height: 30,
//         backgroundColor: '#F4F4F4',
//         borderRadius: 31,
//         flexShrink: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sessionButtonText: {
//         color: '#1A1A1A',
//         fontWeight: '500',
//         fontSize: 12,
//         fontFamily: 'Urbanist',
//         alignSelf: 'center',
//     },
//     roundButtonsWrapper: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//     },
//     roundButton: {
//         width: 64,
//         height: 30,
//         borderRadius: 31,
//         backgroundColor: '#F4F4F4',
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     roundButtonText: {
//         color: '#828282',
//         fontSize: 12,
//         fontWeight: '500',
//         fontFamily: 'Urbanist',
//         alignSelf: 'center',
//     },

//     footer: {
//         width: '100%',
//         height: '60%',
//         // backgroundColor: 'gold',
//         alignItems: 'center',
//     },
//     footerTimerWraper: {
//         top: 10,
//     },
//     fooeterTimerTextWrapper: {
//         alignItems: 'center',
//         position: 'absolute',
//         top: '15%',
//     },
//     timerRoundText: {
//         color: '#000',
//         fontSize: 16,
//         fontWeight: '600',
//         fontFamily: 'Urbanist',
//     },
//     timerDurationText: {
//         color: '#000',
//         fontSize: 20,
//         fontWeight: '700',
//         fontFamily: 'Urbanist',
//     },
//     timeCounter: {
//         color: '#D00D0D',
//         fontSize: 16,
//         fontWeight: '600',
//         fontFamily: 'Urbanist',
//     },
//     footerTimerToggleWrapper: {
//         alignItems: 'center',
//         position: 'absolute',
//         // justifyContent: 'center',

//     },
//     footerTimerToggle: {
//         alignSelf: 'center',
//         position: 'absolute',
//         top: 300,
//     },
//     footerPLayPauseIcon: {
//         alignSelf: 'center',
//         position: 'absolute',
//         top: 318,

//     },
//     logo: {
//         top: '10%',
//         width: '70%',
//     },
// });
// export default Round3;