/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
    View,
    Text,
} from 'react-native';
interface HomeScreenProps {
    navigation: any; // You can use a more specific type if needed
}
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [selectedRounds, setSelectedRounds] = useState<number>(0);
    const updateSelectedRounds = (newValue: number) => {
        setSelectedRounds(newValue);
    };

    const getButtonStyle = (rounds: number): any[] => {
        return [styles.button, selectedRounds == rounds ? styles.selectedButton : {}]
    };
    const getButtonTextStyle = (rounds: number): any[] => {
        return [styles.buttonText, selectedRounds == rounds ? styles.selectedButtonText : {}]
    };

    const onStartTimer = () => {
        console.log(selectedRounds);
        navigation.navigate('Rounds', { rounds: selectedRounds });
    };
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                // flex: 1,
                height: '100%',
                // overflow: 'hidden',
            }}>
            {/* CHILDREN of MAIN VIEW */}
            <View
                style={{
                    // backgroundColor: 'gold',
                    height: '50%',
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
                        // backgroundColor: 'black',
                        top: 30,
                    }}>
                    <Text style={styles.titleText}>Welcome To <Text style={styles.innerText}>Fitness Hoopligans</Text></Text>
                    <Text style={styles.baseText}>How Many Rounds Do You Want To Go Today?</Text>
                    <TouchableOpacity style={getButtonStyle(3)} onPress={() => updateSelectedRounds(3)}>
                        <Text style={getButtonTextStyle(3)}>3 Rounds - 15 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={getButtonStyle(4)} onPress={() => updateSelectedRounds(4)}>
                        <Text style={getButtonTextStyle(4)}>4 Rounds - 20 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={getButtonStyle(5)} onPress={() => updateSelectedRounds(5)}>
                        <Text style={getButtonTextStyle(5)}>5 Rounds - 25 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={getButtonStyle(6)} onPress={() => updateSelectedRounds(6)}>
                        <Text style={getButtonTextStyle(6)}>6 Rounds - 30 Minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButton} onPress={onStartTimer}>
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
        // backgroundColor: '#FFFFFF',
        backgroundColor: 'gold',
        flex: 1,
        height: '50%',
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
        fontFamily: 'Urbanist',
        fontSize: 24,
        fontWeight: '700',
        color: 'black',
    },
    baseText: {
        fontFamily: 'Urbanist',
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    innerText: {
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        // backgroundColor: '#841584',
        // padding: 10,
        borderRadius: 8,
        width: '75%',
        height: '9%',
        borderWidth: 1,
        borderColor: '#D00D0D',
        flexGrow: 1,
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: '#D00D0D',
    },
    selectedButtonText: {
        color: '#FFFFFF',
    },
    buttonText: {
        fontFamily: 'Urbanist',
        fontSize: 16,
        fontWeight: '500',
        color: '#2F2F2F',

        alignSelf: 'center',
    },
    startButton: {
        backgroundColor: '#1A1A1A',
        // padding: 10,
        borderRadius: 8,
        width: '75%',
        height: '9%',
        borderWidth: 1.5,
        // borderColor: 'red',
        flexGrow: 1,
        justifyContent: 'center',
    },
    startButtomText: {
        fontFamily: 'Urbanist',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',

        alignSelf: 'center',
    },

})

export default HomeScreen;
