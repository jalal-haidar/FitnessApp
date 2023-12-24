import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface AppProps { }

const App: React.FC<AppProps> = () => {
    const [timer, setTimer] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const countRef = useRef<NodeJS.Timeout | null>(null);

    // function to handle the start button press
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        if (countRef.current) clearInterval(countRef.current);
        countRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };

    // function to handle the pause button press
    const handlePause = () => {
        if (countRef.current) clearInterval(countRef.current);
        setIsPaused(true);
    };

    // function to handle the continue button press
    const handleContinue = () => {
        setIsPaused(false);
        if (countRef.current) clearInterval(countRef.current);
        countRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };

    // function to handle the reset button press
    const handleReset = () => {
        setTimer(0);
        setIsActive(false);
        setIsPaused(false);
        if (countRef.current) clearInterval(countRef.current);
    };

    // calculate the time values for display
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Stopwatch</Text>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>{formatTime(timer)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {!isActive && !isPaused ? (
                    <TouchableOpacity style={styles.button} onPress={handleStart}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                ) : (
                    <>
                        <TouchableOpacity style={styles.button} onPress={handlePause}>
                            <Text style={styles.buttonText}>Pause</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleReset}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                        {isPaused && (
                            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    timerContainer: {
        borderWidth: 4,
        borderColor: 'black',
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timer: {
        fontSize: 50,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});

export default App;
